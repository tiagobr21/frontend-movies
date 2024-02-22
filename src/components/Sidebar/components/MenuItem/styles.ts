import { NavLink } from "react-router-dom";

import { styled as styledMui } from "@mui/material";
import styled from "styled-components";
import tinycolor from "tinycolor2";

import STYLED_THEME from "../../../../styles/theme";

import {
    closedMixinGroupLabel,
    closedMixinItemLabel,
    closedMixinMenuItem,
    openedMixinGroupLabel,
    openedMixinItemLabel,
    openedMixinMenuItem,
} from "./utils";

import { IMenuItem } from "./types";

export const ItemLabel = styled.span<any>(({ theme }) => ({
    color: theme.color.text.light,
    transition: "0.4s",
    fontSize: STYLED_THEME.font.size.small,
    fontWeight: 500,

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));

export const Link = styledMui(NavLink)<IMenuItem>(
    ({ theme, styled_theme, open }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: open ? "auto" : "center",
        position: "relative",
        height: "48px",
        borderRadius: styled_theme.shape.radius.small,
        gap: !open ? "0px" : "15px",
        color: styled_theme.color.text.light,
        margin: "0px 10px",

        ...(open
            ? {
                  width: `calc(${styled_theme.shape.sidebar.open.width} - 20px)`,
              }
            : {
                  width: `calc(${styled_theme.shape.sidebar.close.width} - 20px)`,
              }),

        textDecoration: "none",
        cursor: "pointer",

        "::before": {
            content: "''",
            position: open ? "static" : "absolute",
            left: open ? "static" : "0px",
            height: "24px",
            width: "5px",
            borderRadius: "0px 3px 3px 0px",
            transition: "all 0.2s ease",
        },

        ":hover:before": {
            background: styled_theme.color.primary.light,
        },

        "&:hover": {
            color: styled_theme.color.primary.light,

            background: tinycolor(styled_theme.color.secondary.light)
                .darken(2)
                .toHex8String(),

            svg: {
                fill: styled_theme.color.primary.light,
            },

            h4: {
                color: styled_theme.color.primary.light,
            },
        },

        svg: {
            fill: styled_theme.color.text.light,
            minWidth: 24,
        },

        [`${ItemLabel}`]: {
            ...(open && {
                ...openedMixinItemLabel(theme),
                "&": openedMixinItemLabel(theme),
            }),

            ...(!open && {
                ...closedMixinItemLabel(theme),
                "&": closedMixinItemLabel(theme),
            }),
        },

        ...(open && {
            ...openedMixinMenuItem(theme),
            "&": openedMixinMenuItem(theme),
        }),

        ...(!open && {
            ...closedMixinMenuItem(theme),
            "&": closedMixinMenuItem(theme),
        }),
    })
);

export const GroupBox = styled.div<any>(() => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}));

export const GroupLabel = styledMui("h4")<any>(
    ({ theme, styled_theme, open }) => ({
        color: styled_theme.color.text.main,
        fontSize: styled_theme.font.size.small,

        ...(open && {
            ...openedMixinGroupLabel(theme),
            "&": openedMixinGroupLabel(theme),
        }),

        ...(!open && {
            ...closedMixinGroupLabel(theme),
            "&": closedMixinGroupLabel(theme),
        }),
    })
);
