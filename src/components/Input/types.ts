import { FocusEvent } from "react";

import { OutlinedInputProps } from "@mui/material";
import { FormikErrors } from "formik";

export interface IInputProps extends OutlinedInputProps {
    id: string;
    name?: string;
    label?: string;
    labelInfo?: string;
    value?: string | number | null;
    width?: string;
    /*   onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;*/
    onBlur?: (e: FocusEvent<any, Element>) => void;
    autoFocus?: boolean;
    type?: any;
    variant?: string;
    multiline?: boolean;
    flex?: number;
    error?: any;
    helperText?: string | boolean | any;
    onKeyDown?: any;

    maxRows?: any;
    minRows?: any;
    placeholder?: string;

    required?: any;

    icon?: any;
    iconAction?: any;
    iconPosition?: "end" | "start";
    maxChar?: number;
    minChar?: number;
    readOnly?: boolean;
}
