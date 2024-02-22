import { Link as Links } from "react-router-dom";

import { Breadcrumbs, styled as styledMui } from "@mui/material";

import STYLED_THEME from "../../styles/theme";

export const Breadcrumb = styledMui(Breadcrumbs)<any>(() => ({
    color: STYLED_THEME.color.text.light,
}));

export const Link = styledMui(Links)<any>(({ to, onClick, fontWeight }) => ({
    color: STYLED_THEME.color.text.light,
    fontSize: STYLED_THEME.font.size.small,
    textDecoration: "none",
    fontWeight: fontWeight,

    "&:hover": {
        color: (to || onClick) && STYLED_THEME.color.primary.light,
        cursor: (to || onClick) && "pointer",
    },
}));
