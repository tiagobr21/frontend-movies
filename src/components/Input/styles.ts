import {
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    styled as styledMui,
} from "@mui/material";
import styled from "styled-components";

import STYLED_THEME from "../../styles/theme";

export const InputControl = styledMui(FormControl)<any>(
    ({ flex, width, label }) => ({
        display: "flex",
        flexDirection: "column",
        minWidth: "150px",
        marginTop: label && 16,
        borderRadius: STYLED_THEME.shape.radius.small,
        backgroundColor: STYLED_THEME.color.background.default,
        ...(width
            ? { width: width ? width : "auto" }
            : { flex: flex ? flex : "auto" }),
    })
);

export const Label = styledMui(InputLabel)<any>(() => ({
    "&&": { color: STYLED_THEME.color.text.dark },
    "& .required": { color: STYLED_THEME.color.error.main },
    marginLeft: -11,
    marginTop: -10,
}));

export const InputBase = styledMui(OutlinedInput)<any>(
    ({
        theme,
        error,
        flex,
        width,
        icon,
        icon_position,
        multiline,
        readOnly,
    }) => ({
        "& .MuiInputBase-input": {
            padding: "10px 12px",
            color: STYLED_THEME.color.text.main,
            backgroundColor: STYLED_THEME.color.background.default,
            borderRadius: STYLED_THEME.shape.radius.small,
            ...(icon === "true" && {
                borderTopRightRadius: icon_position === "end" && 0,
                borderBottomRightRadius: icon_position === "end" && 0,
                borderTopLeftRadius: icon_position === "start" && 0,
                borderBottomLeftRadius: icon_position === "start" && 0,
                borderRight: icon_position === "end" && "none",
                borderLeft: icon_position === "start" && "none",
            }),
            ...(multiline && { border: 0 }),
            fontSize: STYLED_THEME.font.size.medium,
            fontFamily: STYLED_THEME.font.family,
            transition: theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow",
            ]),
            ...(width
                ? { width: width ? width : "auto" }
                : { flex: flex ? flex : "auto" }),
            "&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button":
                { webkitAppearance: "none", appearance: "none", margin: 0 },
            "&&:hover": {
                color: STYLED_THEME.color.text.main,
                borderColor: error
                    ? STYLED_THEME.color.error.main
                    : STYLED_THEME.color.primary.main,
                backgroundColor: STYLED_THEME.color.neutral[8],
            },
        },
        "&& .MuiOutlinedInput-notchedOutline": {
            ...(readOnly
                ? {
                      border: `2px solid ${STYLED_THEME.color.primary.main}`,
                  }
                : {
                      border: `2px solid ${
                          error ? STYLED_THEME.color.error.main : null
                      }`,
                  }),
        },
    })
);
export const LabelInformation = styled.span`
    font-size: 0.7rem;
    text-align: end;
    color: ${({ theme }) => theme.color.info.dark};
    margin: 5px 0;
`;
export const HelperText = styledMui(FormHelperText)<any>(({ error }) => ({
    color: error ? STYLED_THEME.color.error.main : STYLED_THEME.color.text.main,
    textAlign: "start",
    margin: "0px 0px 0px 3px",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}));
