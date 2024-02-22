import { styled as styledMui } from "@mui/material";

import { closedMixin, openedMixin } from "./utils";

export const Content = styledMui("div", {
    shouldForwardProp: (prop) => prop !== "open",
})<any>(({ theme, open, styled_theme }) => ({
    display: "flex",
    position: "relative",

    ...(open && {
        ...openedMixin(theme, styled_theme),
        "&": openedMixin(theme, styled_theme),
    }),

    ...(!open && {
        ...closedMixin(theme, styled_theme),
        "&": closedMixin(theme, styled_theme),
    }),
}));
