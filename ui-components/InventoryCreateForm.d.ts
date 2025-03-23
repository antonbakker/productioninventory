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
export declare type InventoryCreateFormInputValues = {
    date?: string;
    quantity?: number;
};
export declare type InventoryCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InventoryCreateFormOverridesProps = {
    InventoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InventoryCreateFormProps = React.PropsWithChildren<{
    overrides?: InventoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InventoryCreateFormInputValues) => InventoryCreateFormInputValues;
    onSuccess?: (fields: InventoryCreateFormInputValues) => void;
    onError?: (fields: InventoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InventoryCreateFormInputValues) => InventoryCreateFormInputValues;
    onValidate?: InventoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function InventoryCreateForm(props: InventoryCreateFormProps): React.ReactElement;
