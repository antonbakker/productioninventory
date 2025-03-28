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
export declare type MutationTypeCreateFormInputValues = {
    name?: string;
    description?: string;
    factor?: number;
    isDefault?: boolean;
};
export declare type MutationTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    factor?: ValidationFunction<number>;
    isDefault?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MutationTypeCreateFormOverridesProps = {
    MutationTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    factor?: PrimitiveOverrideProps<TextFieldProps>;
    isDefault?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type MutationTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: MutationTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MutationTypeCreateFormInputValues) => MutationTypeCreateFormInputValues;
    onSuccess?: (fields: MutationTypeCreateFormInputValues) => void;
    onError?: (fields: MutationTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MutationTypeCreateFormInputValues) => MutationTypeCreateFormInputValues;
    onValidate?: MutationTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MutationTypeCreateForm(props: MutationTypeCreateFormProps): React.ReactElement;
