/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createLocation } from "./graphql/mutations";
const client = generateClient();
export default function LocationCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    tamigoDepartmentId: "",
    omsLocationId: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [tamigoDepartmentId, setTamigoDepartmentId] = React.useState(
    initialValues.tamigoDepartmentId
  );
  const [omsLocationId, setOmsLocationId] = React.useState(
    initialValues.omsLocationId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setTamigoDepartmentId(initialValues.tamigoDepartmentId);
    setOmsLocationId(initialValues.omsLocationId);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    tamigoDepartmentId: [{ type: "Required" }],
    omsLocationId: [{ type: "Required" }],
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
          tamigoDepartmentId,
          omsLocationId,
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
            query: createLocation.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "LocationCreateForm")}
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
              tamigoDepartmentId,
              omsLocationId,
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
        label="Tamigo department id"
        isRequired={true}
        isReadOnly={false}
        value={tamigoDepartmentId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              tamigoDepartmentId: value,
              omsLocationId,
            };
            const result = onChange(modelFields);
            value = result?.tamigoDepartmentId ?? value;
          }
          if (errors.tamigoDepartmentId?.hasError) {
            runValidationTasks("tamigoDepartmentId", value);
          }
          setTamigoDepartmentId(value);
        }}
        onBlur={() =>
          runValidationTasks("tamigoDepartmentId", tamigoDepartmentId)
        }
        errorMessage={errors.tamigoDepartmentId?.errorMessage}
        hasError={errors.tamigoDepartmentId?.hasError}
        {...getOverrideProps(overrides, "tamigoDepartmentId")}
      ></TextField>
      <TextField
        label="Oms location id"
        isRequired={true}
        isReadOnly={false}
        value={omsLocationId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              tamigoDepartmentId,
              omsLocationId: value,
            };
            const result = onChange(modelFields);
            value = result?.omsLocationId ?? value;
          }
          if (errors.omsLocationId?.hasError) {
            runValidationTasks("omsLocationId", value);
          }
          setOmsLocationId(value);
        }}
        onBlur={() => runValidationTasks("omsLocationId", omsLocationId)}
        errorMessage={errors.omsLocationId?.errorMessage}
        hasError={errors.omsLocationId?.hasError}
        {...getOverrideProps(overrides, "omsLocationId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
