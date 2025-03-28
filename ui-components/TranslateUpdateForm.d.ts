import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Translate } from "./graphql/types";
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
export declare type TranslateUpdateFormInputValues = {
    phrase?: string;
    translation?: string;
    key?: string;
};
export declare type TranslateUpdateFormValidationValues = {
    phrase?: ValidationFunction<string>;
    translation?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TranslateUpdateFormOverridesProps = {
    TranslateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phrase?: PrimitiveOverrideProps<TextFieldProps>;
    translation?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TranslateUpdateFormProps = React.PropsWithChildren<{
    overrides?: TranslateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    translate?: Translate;
    onSubmit?: (fields: TranslateUpdateFormInputValues) => TranslateUpdateFormInputValues;
    onSuccess?: (fields: TranslateUpdateFormInputValues) => void;
    onError?: (fields: TranslateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TranslateUpdateFormInputValues) => TranslateUpdateFormInputValues;
    onValidate?: TranslateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TranslateUpdateForm(props: TranslateUpdateFormProps): React.ReactElement;
