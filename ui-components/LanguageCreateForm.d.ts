import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LanguageCreateFormInputValues = {
    name?: string;
    code?: string;
};
export declare type LanguageCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LanguageCreateFormOverridesProps = {
    LanguageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LanguageCreateFormProps = React.PropsWithChildren<{
    overrides?: LanguageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LanguageCreateFormInputValues) => LanguageCreateFormInputValues;
    onSuccess?: (fields: LanguageCreateFormInputValues) => void;
    onError?: (fields: LanguageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LanguageCreateFormInputValues) => LanguageCreateFormInputValues;
    onValidate?: LanguageCreateFormValidationValues;
} & React.CSSProperties>;
export default function LanguageCreateForm(props: LanguageCreateFormProps): React.ReactElement;
