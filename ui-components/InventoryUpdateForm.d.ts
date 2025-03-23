import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Inventory } from "./graphql/types";
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
export declare type InventoryUpdateFormInputValues = {
    date?: string;
    quantity?: number;
};
export declare type InventoryUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InventoryUpdateFormOverridesProps = {
    InventoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InventoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: InventoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    inventory?: Inventory;
    onSubmit?: (fields: InventoryUpdateFormInputValues) => InventoryUpdateFormInputValues;
    onSuccess?: (fields: InventoryUpdateFormInputValues) => void;
    onError?: (fields: InventoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InventoryUpdateFormInputValues) => InventoryUpdateFormInputValues;
    onValidate?: InventoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InventoryUpdateForm(props: InventoryUpdateFormProps): React.ReactElement;
