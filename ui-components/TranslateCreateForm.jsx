/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTranslate } from "./graphql/mutations";
const client = generateClient();
export default function TranslateCreateForm(props) {
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
    phrase: "",
    translation: "",
    key: "",
  };
  const [phrase, setPhrase] = React.useState(initialValues.phrase);
  const [translation, setTranslation] = React.useState(
    initialValues.translation
  );
  const [key, setKey] = React.useState(initialValues.key);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPhrase(initialValues.phrase);
    setTranslation(initialValues.translation);
    setKey(initialValues.key);
    setErrors({});
  };
  const validations = {
    phrase: [{ type: "Required" }],
    translation: [{ type: "Required" }],
    key: [{ type: "Required" }],
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
          phrase,
          translation,
          key,
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
            query: createTranslate.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TranslateCreateForm")}
      {...rest}
    >
      <TextField
        label="Phrase"
        isRequired={true}
        isReadOnly={false}
        value={phrase}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phrase: value,
              translation,
              key,
            };
            const result = onChange(modelFields);
            value = result?.phrase ?? value;
          }
          if (errors.phrase?.hasError) {
            runValidationTasks("phrase", value);
          }
          setPhrase(value);
        }}
        onBlur={() => runValidationTasks("phrase", phrase)}
        errorMessage={errors.phrase?.errorMessage}
        hasError={errors.phrase?.hasError}
        {...getOverrideProps(overrides, "phrase")}
      ></TextField>
      <TextField
        label="Translation"
        isRequired={true}
        isReadOnly={false}
        value={translation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phrase,
              translation: value,
              key,
            };
            const result = onChange(modelFields);
            value = result?.translation ?? value;
          }
          if (errors.translation?.hasError) {
            runValidationTasks("translation", value);
          }
          setTranslation(value);
        }}
        onBlur={() => runValidationTasks("translation", translation)}
        errorMessage={errors.translation?.errorMessage}
        hasError={errors.translation?.hasError}
        {...getOverrideProps(overrides, "translation")}
      ></TextField>
      <TextField
        label="Key"
        isRequired={true}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phrase,
              translation,
              key: value,
            };
            const result = onChange(modelFields);
            value = result?.key ?? value;
          }
          if (errors.key?.hasError) {
            runValidationTasks("key", value);
          }
          setKey(value);
        }}
        onBlur={() => runValidationTasks("key", key)}
        errorMessage={errors.key?.errorMessage}
        hasError={errors.key?.hasError}
        {...getOverrideProps(overrides, "key")}
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
