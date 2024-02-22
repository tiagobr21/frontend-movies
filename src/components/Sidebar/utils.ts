import { CSSObject, Theme } from "@mui/material/styles";

export const openedMixin = (theme: Theme, styled_theme: any): CSSObject => ({
    width: styled_theme.shape.sidebar.open.width,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

export const closedMixin = (theme: Theme, styled_theme: any): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: styled_theme.shape.sidebar.close.width,
});

export const openedMixinLabel = (theme: Theme): CSSObject => ({
    opacity: 1,
    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

export const closedMixinLabel = (theme: Theme): CSSObject => ({
    opacity: 0,
    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
});
