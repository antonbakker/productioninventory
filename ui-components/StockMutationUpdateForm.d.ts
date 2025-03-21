import * as React from "react";
import {
  GridProps,
  SwitchFieldProps,
  TextFieldProps,
} from "@aws-amplify/ui-react";
import { StockMutation } from "./graphql/types";
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type StockMutationUpdateFormInputValues = {
  location?: string;
  date?: string;
  shift?: string;
  type?: string;
  corrections?: boolean;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};
export declare type StockMutationUpdateFormValidationValues = {
  location?: ValidationFunction<string>;
  date?: ValidationFunction<string>;
  shift?: ValidationFunction<string>;
  type?: ValidationFunction<string>;
  corrections?: ValidationFunction<boolean>;
  userId?: ValidationFunction<string>;
  createdAt?: ValidationFunction<string>;
  updatedAt?: ValidationFunction<string>;
  deletedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type StockMutationUpdateFormOverridesProps = {
  StockMutationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  location?: PrimitiveOverrideProps<TextFieldProps>;
  date?: PrimitiveOverrideProps<TextFieldProps>;
  shift?: PrimitiveOverrideProps<TextFieldProps>;
  type?: PrimitiveOverrideProps<TextFieldProps>;
  corrections?: PrimitiveOverrideProps<SwitchFieldProps>;
  userId?: PrimitiveOverrideProps<TextFieldProps>;
  createdAt?: PrimitiveOverrideProps<TextFieldProps>;
  updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
  deletedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockMutationUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: StockMutationUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    stockMutation?: StockMutation;
    onSubmit?: (
      fields: StockMutationUpdateFormInputValues
    ) => StockMutationUpdateFormInputValues;
    onSuccess?: (fields: StockMutationUpdateFormInputValues) => void;
    onError?: (
      fields: StockMutationUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: StockMutationUpdateFormInputValues
    ) => StockMutationUpdateFormInputValues;
    onValidate?: StockMutationUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function StockMutationUpdateForm(
  props: StockMutationUpdateFormProps
): React.ReactElement;
