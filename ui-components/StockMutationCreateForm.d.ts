import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StockMutationCreateFormInputValues = {
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
export declare type StockMutationCreateFormValidationValues = {
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockMutationCreateFormOverridesProps = {
    StockMutationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type StockMutationCreateFormProps = React.PropsWithChildren<{
    overrides?: StockMutationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StockMutationCreateFormInputValues) => StockMutationCreateFormInputValues;
    onSuccess?: (fields: StockMutationCreateFormInputValues) => void;
    onError?: (fields: StockMutationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockMutationCreateFormInputValues) => StockMutationCreateFormInputValues;
    onValidate?: StockMutationCreateFormValidationValues;
} & React.CSSProperties>;
export default function StockMutationCreateForm(props: StockMutationCreateFormProps): React.ReactElement;
