import { CSSObject, Theme } from "@mui/material/styles";

export const openedMixin = (theme: Theme, styled_theme: any): CSSObject => ({
    width: `calc(100vw - ${styled_theme.shape.sidebar.open.width})`,
    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),

    left: styled_theme.shape.sidebar.open.width,
    marginTop: styled_theme.shape.appbar.height,

    overflowX: "hidden",
});

export const closedMixin = (theme: Theme, styled_theme: any): CSSObject => ({
    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.leavingScreen,
    }),

    left: styled_theme.shape.sidebar.close.width,

    marginTop: styled_theme.shape.appbar.height,

    overflowX: "hidden",
    width: `calc(100vw - ${styled_theme.shape.sidebar.close.width})`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(100vw - ${styled_theme.shape.sidebar.close.width})`,
    },
});
