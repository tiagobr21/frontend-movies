import { LoadingButton } from "@mui/lab";
import { styled as styledMui } from "@mui/material";

import STYLED_THEME from "../../styles/theme";

export const ButtonStyled = styledMui(LoadingButton)<any>(
    ({
        flex,
        variant,
        width,
        height,
        justify,
        disabled,
        uppercase,
        is_open,
    }) => ({
        "&&": {
            display: "flex",
            justifyContent: justify ? justify : "center",
            alignItems: "center",
            fontWeight: "bold",
            padding: "9px 20px",
            background:
                variant === "text" &&
                is_open === "true" &&
                STYLED_THEME.color.fade.primary,

            ...(variant === "standard"
                ? {
                      backgroundColor: disabled
                          ? STYLED_THEME.color.disabled
                          : STYLED_THEME.color.secondary.light,

                      color: disabled && STYLED_THEME.color.disabled,
                  }
                : {
                      backgroundColor:
                          variant === "outlined" &&
                          STYLED_THEME.color.fade.primary,
                      border:
                          variant === "text" &&
                          `1px solid ${STYLED_THEME.color.border}`,
                      color: variant === "text" && STYLED_THEME.color.text.main,
                  }),

            borderRadius: STYLED_THEME.shape.radius.small,

            ...(width
                ? {
                      width: width ? width : "auto",
                  }
                : {
                      flex: flex ? flex : "auto",
                  }),

            height: height ? height : "42px",

            transition: "0.3s",
            boxShadow: "none",
            cursor: disabled ? "auto" : "pointer",

            "&:hover": {
                ...(variant === "standard"
                    ? {
                          backgroundColor: STYLED_THEME.color.secondary.main,
                          color: STYLED_THEME.color.primary.main,
                      }
                    : {
                          backgroundColor:
                              variant === "outlined" &&
                              STYLED_THEME.color.fade.primary,
                      }),

                boxShadow: "none",
            },

            borderColor:
                variant === "text" &&
                is_open === "true" &&
                STYLED_THEME.color.primary.main,

            // @media (maxWidth: 800px) {
            // 	width: 100%;
            // },

            ...(variant === "text" &&
                is_open === "true" && {
                    color: STYLED_THEME.color.primary.main,
                }),

            textTransform: uppercase === "false" && "capitalize",
        },
    })
);
