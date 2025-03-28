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
export declare type TranslateCreateFormInputValues = {
    phrase?: string;
    translation?: string;
    key?: string;
};
export declare type TranslateCreateFormValidationValues = {
    phrase?: ValidationFunction<string>;
    translation?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TranslateCreateFormOverridesProps = {
    TranslateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phrase?: PrimitiveOverrideProps<TextFieldProps>;
    translation?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TranslateCreateFormProps = React.PropsWithChildren<{
    overrides?: TranslateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TranslateCreateFormInputValues) => TranslateCreateFormInputValues;
    onSuccess?: (fields: TranslateCreateFormInputValues) => void;
    onError?: (fields: TranslateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TranslateCreateFormInputValues) => TranslateCreateFormInputValues;
    onValidate?: TranslateCreateFormValidationValues;
} & React.CSSProperties>;
export default function TranslateCreateForm(props: TranslateCreateFormProps): React.ReactElement;
