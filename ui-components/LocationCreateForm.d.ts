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
export declare type LocationCreateFormInputValues = {
    name?: string;
    tamigoDepartmentId?: string;
    omsLocationId?: string;
};
export declare type LocationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    tamigoDepartmentId?: ValidationFunction<string>;
    omsLocationId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationCreateFormOverridesProps = {
    LocationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    tamigoDepartmentId?: PrimitiveOverrideProps<TextFieldProps>;
    omsLocationId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationCreateFormProps = React.PropsWithChildren<{
    overrides?: LocationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onSuccess?: (fields: LocationCreateFormInputValues) => void;
    onError?: (fields: LocationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onValidate?: LocationCreateFormValidationValues;
} & React.CSSProperties>;
export default function LocationCreateForm(props: LocationCreateFormProps): React.ReactElement;
