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
    date?: string;
    corrections?: boolean;
    quantity?: number;
};
export declare type StockMutationCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    corrections?: ValidationFunction<boolean>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockMutationCreateFormOverridesProps = {
    StockMutationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    corrections?: PrimitiveOverrideProps<SwitchFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
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
