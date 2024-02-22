import { IconButton, InputAdornment } from "@mui/material";
import { useTheme } from "styled-components";

import {
    HelperText,
    InputBase,
    InputControl,
    Label,
    LabelInformation,
} from "./styles";

import { requiredFields } from "./utils";

import { IInputProps } from "./types";

import { APP_SETTINGS, GLOBAL_TEXTS } from "../../configs";

function Input({
    name,
    label,
    value,
    type,
    variant,
    width,
    flex,
    error,
    helperText,
    required,
    onKeyDown,
    multiline,
    maxRows,
    minRows,
    icon: Icon,
    iconAction,
    iconPosition,
    id,
    labelInfo,
    maxChar,
    minChar,
    readOnly,
    ...rest
}: IInputProps) {
    const styledTheme = useTheme();

    const requiredType = () => {
        if (typeof required === "object") {
            return requiredFields(name as string, required);
        } else {
            return required ? GLOBAL_TEXTS.FORM.required_field_symbol : null;
        }
    };

    const adornment = (position: string) => {
        if (position === iconPosition) {
            return (
                <InputAdornment
                    position={iconPosition ? iconPosition : "end"}
                    className="adornment"
                >
                    <IconButton
                        aria-label="icon action"
                        onClick={iconAction}
                        edge={iconPosition ? iconPosition : "end"}
                    >
                        <Icon />
                    </IconButton>
                </InputAdornment>
            );
        }
    };

    const WATCH_KEY_ID = APP_SETTINGS.COMPONENTS.inputs_tooltip_key + id;

    return (
        <InputControl
            width={width}
            flex={flex}
            label={label}
            variant={variant ? variant : "outlined"}
            size="small"
            styled_theme={styledTheme}
        >
            <Label
                shrink
                error={error}
                htmlFor={WATCH_KEY_ID}
                styled_theme={styledTheme}
            >
                {label}
                <span className="required">{requiredType()}</span>
            </Label>

            <InputBase
                id={WATCH_KEY_ID}
                name={name}
                type={type ? type : "text"}
                value={value}
                width={width}
                flex={flex}
                onKeyDown={onKeyDown}
                error={error}
                multiline={multiline}
                minRows={minRows}
                maxRows={maxRows}
                styled_theme={styledTheme}
                icon={Icon?.toString()}
                icon_position={iconPosition}
                endAdornment={adornment("end")}
                startAdornment={adornment("start")}
                inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    readOnly: readOnly,
                }}
                readOnly={readOnly}
                {...rest}
            />
            {labelInfo && !error ? (
                <LabelInformation>{labelInfo}</LabelInformation>
            ) : null}
            <HelperText styled_theme={styledTheme} error={error}>
                {helperText}
            </HelperText>
        </InputControl>
    );
}

export default Input;
