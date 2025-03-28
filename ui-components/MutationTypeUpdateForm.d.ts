import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MutationType } from "./graphql/types";
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
export declare type MutationTypeUpdateFormInputValues = {
    name?: string;
    description?: string;
    factor?: number;
    isDefault?: boolean;
};
export declare type MutationTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    factor?: ValidationFunction<number>;
    isDefault?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MutationTypeUpdateFormOverridesProps = {
    MutationTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    factor?: PrimitiveOverrideProps<TextFieldProps>;
    isDefault?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type MutationTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: MutationTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mutationType?: MutationType;
    onSubmit?: (fields: MutationTypeUpdateFormInputValues) => MutationTypeUpdateFormInputValues;
    onSuccess?: (fields: MutationTypeUpdateFormInputValues) => void;
    onError?: (fields: MutationTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MutationTypeUpdateFormInputValues) => MutationTypeUpdateFormInputValues;
    onValidate?: MutationTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MutationTypeUpdateForm(props: MutationTypeUpdateFormProps): React.ReactElement;
