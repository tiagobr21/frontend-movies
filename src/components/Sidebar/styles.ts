import { styled as styledMui } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import styled from "styled-components";
import tinycolor from "tinycolor2";

import {
    closedMixin,
    closedMixinLabel,
    openedMixin,
    openedMixinLabel,
} from "./utils";

import { IDrawerHeaderProps, IDrawerProps } from "./types";

export const Logotype = styledMui("img", {
    shouldForwardProp: (prop) => prop !== "open",
})<any>(({ theme, open, styled_theme }) => ({
    ...(open && {
        ...openedMixin(theme, styled_theme),
        "&": openedMixin(theme, styled_theme),
    }),
    ...(!open && {
        ...closedMixin(theme, styled_theme),
        "&": closedMixin(theme, styled_theme),
    }),
}));

export const ItemLabel = styledMui("span")<any>(({ theme, open }) => ({
    ...(open && {
        ...openedMixinLabel(theme),
        "&": openedMixinLabel(theme),
    }),
    ...(!open && {
        ...closedMixinLabel(theme),
        "&": closedMixinLabel(theme),
    }),
}));

export const DrawerHeader = styledMui("div")<IDrawerHeaderProps>(
    ({ theme, styled_theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 10px 0px 16px",

        height: styled_theme.shape.appbar.height,

        ...theme.mixins.toolbar,
    })
);

export const Drawer = styledMui(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})<IDrawerProps>(({ theme, open, styled_theme }) => ({
    width: styled_theme.shape.sidebar.open.width,
    flexShrink: 0,

    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme, styled_theme),
        "& .MuiDrawer-paper": openedMixin(theme, styled_theme),
    }),
    ...(!open && {
        ...closedMixin(theme, styled_theme),
        "& .MuiDrawer-paper": closedMixin(theme, styled_theme),
    }),
}));

export const Stack = styled.ul<any>`
    display: flex;
    flex-direction: column;

    gap: 20px;

    .active {
        color: ${({ theme }) => theme.color.text.light};
        background-color: ${({ theme }) => theme.color.secondary.light};

        :before {
            background: ${({ theme }) => theme.color.primary.light};
        }

        svg {
            fill: ${({ theme }) => theme.color.primary.light};
        }

        h4 {
            color: ${({ theme }) => theme.color.primary.light};
        }
    }

    @media (max-width: 800px) {
        display: ${({ open }) => (open ? "block" : "none")};
    }
`;

export const Navigator = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 20px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) =>
            tinycolor(theme.color.background.soft).darken(6).toHex8String()};

        border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.fade.primary};

        border-radius: ${({ theme }) =>
            `${theme.shape.radius.small} 0px  0px ${theme.shape.radius.small}`};
    }

    :nth-child(2n) {
        background-color: red;
    }
`;
