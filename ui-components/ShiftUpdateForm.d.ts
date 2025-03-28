import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Shift } from "./graphql/types";
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
export declare type ShiftUpdateFormInputValues = {
    name?: string;
    isDefault?: boolean;
    startTime?: string;
    endTime?: string;
    tamigoShiftId?: string;
};
export declare type ShiftUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    isDefault?: ValidationFunction<boolean>;
    startTime?: ValidationFunction<string>;
    endTime?: ValidationFunction<string>;
    tamigoShiftId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShiftUpdateFormOverridesProps = {
    ShiftUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isDefault?: PrimitiveOverrideProps<SwitchFieldProps>;
    startTime?: PrimitiveOverrideProps<TextFieldProps>;
    endTime?: PrimitiveOverrideProps<TextFieldProps>;
    tamigoShiftId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShiftUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShiftUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shift?: Shift;
    onSubmit?: (fields: ShiftUpdateFormInputValues) => ShiftUpdateFormInputValues;
    onSuccess?: (fields: ShiftUpdateFormInputValues) => void;
    onError?: (fields: ShiftUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShiftUpdateFormInputValues) => ShiftUpdateFormInputValues;
    onValidate?: ShiftUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShiftUpdateForm(props: ShiftUpdateFormProps): React.ReactElement;
