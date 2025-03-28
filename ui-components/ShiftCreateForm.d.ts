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
export declare type ShiftCreateFormInputValues = {
    name?: string;
    isDefault?: boolean;
    startTime?: string;
    endTime?: string;
    tamigoShiftId?: string;
};
export declare type ShiftCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    isDefault?: ValidationFunction<boolean>;
    startTime?: ValidationFunction<string>;
    endTime?: ValidationFunction<string>;
    tamigoShiftId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShiftCreateFormOverridesProps = {
    ShiftCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isDefault?: PrimitiveOverrideProps<SwitchFieldProps>;
    startTime?: PrimitiveOverrideProps<TextFieldProps>;
    endTime?: PrimitiveOverrideProps<TextFieldProps>;
    tamigoShiftId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShiftCreateFormProps = React.PropsWithChildren<{
    overrides?: ShiftCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShiftCreateFormInputValues) => ShiftCreateFormInputValues;
    onSuccess?: (fields: ShiftCreateFormInputValues) => void;
    onError?: (fields: ShiftCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShiftCreateFormInputValues) => ShiftCreateFormInputValues;
    onValidate?: ShiftCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShiftCreateForm(props: ShiftCreateFormProps): React.ReactElement;
