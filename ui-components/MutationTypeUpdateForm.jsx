/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMutationType } from "./graphql/queries";
import { updateMutationType } from "./graphql/mutations";
const client = generateClient();
export default function MutationTypeUpdateForm(props) {
  const {
    id: idProp,
    mutationType: mutationTypeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    factor: "",
    isDefault: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [factor, setFactor] = React.useState(initialValues.factor);
  const [isDefault, setIsDefault] = React.useState(initialValues.isDefault);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mutationTypeRecord
      ? { ...initialValues, ...mutationTypeRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setFactor(cleanValues.factor);
    setIsDefault(cleanValues.isDefault);
    setErrors({});
  };
  const [mutationTypeRecord, setMutationTypeRecord] = React.useState(
    mutationTypeModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMutationType.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMutationType
        : mutationTypeModelProp;
      setMutationTypeRecord(record);
    };
    queryData();
  }, [idProp, mutationTypeModelProp]);
  React.useEffect(resetStateValues, [mutationTypeRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    factor: [],
    isDefault: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description: description ?? null,
          factor: factor ?? null,
          isDefault: isDefault ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateMutationType.replaceAll("__typename", ""),
            variables: {
              input: {
                id: mutationTypeRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MutationTypeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              factor,
              isDefault,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              factor,
              isDefault,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Factor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={factor}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              factor: value,
              isDefault,
            };
            const result = onChange(modelFields);
            value = result?.factor ?? value;
          }
          if (errors.factor?.hasError) {
            runValidationTasks("factor", value);
          }
          setFactor(value);
        }}
        onBlur={() => runValidationTasks("factor", factor)}
        errorMessage={errors.factor?.errorMessage}
        hasError={errors.factor?.hasError}
        {...getOverrideProps(overrides, "factor")}
      ></TextField>
      <SwitchField
        label="Is default"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isDefault}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              factor,
              isDefault: value,
            };
            const result = onChange(modelFields);
            value = result?.isDefault ?? value;
          }
          if (errors.isDefault?.hasError) {
            runValidationTasks("isDefault", value);
          }
          setIsDefault(value);
        }}
        onBlur={() => runValidationTasks("isDefault", isDefault)}
        errorMessage={errors.isDefault?.errorMessage}
        hasError={errors.isDefault?.hasError}
        {...getOverrideProps(overrides, "isDefault")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || mutationTypeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || mutationTypeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
