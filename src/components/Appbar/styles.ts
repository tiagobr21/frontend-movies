import { NavLink } from "react-router-dom";

import {
    AppBar as AppBarMui,
    MenuItem,
    Menu as MenuMui,
    Paper,
    Toolbar as ToolbarMui,
    styled as styledMui,
} from "@mui/material";
import styled from "styled-components";

import STYLED_THEME from "../../styles/theme";
import { setSpacing } from "../../styles/theme/utils";

import { IGlobalStyled } from "../types";
import { IAppBarStyled } from "./types";

export const AppBar = styledMui(AppBarMui, {
    shouldForwardProp: (prop) => prop !== "open",
})<IAppBarStyled>(({ theme, open, styled_theme }) => ({
    height: styled_theme.shape.appbar.height,
    zIndex: theme.zIndex.drawer + 1,

    background: styled_theme.color.background.default,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),

    ...(open && {
        marginLeft: styled_theme.shape.sidebar.open.width,
        width: `calc(100vw - ${styled_theme.shape.sidebar.open.width}) `,
        height: styled_theme.shape.appbar.height,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const Toolbar = styledMui(ToolbarMui)<IAppBarStyled>(
    ({ styled_theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        background: styled_theme.color.background.default,
    })
);

export const Menu = styledMui(MenuMui)<any>(() => ({
    "& .MuiMenu-list": {
        display: "flex",
        flexDirection: "column",
        gap: setSpacing("small"),
        maxHeight: "426px",
        padding: "20px 0px",
    },
}));

export const Option = styledMui(MenuItem)<any>(() => ({
    width: "100%",
}));

export const UserName = styled.h3<any>`
    color: ${({ theme }) => theme.color.text.main};
    font-size: ${({ theme }) => theme.font.size.medium};

    @media (max-width: 800px) {
        font-size: ${({ theme }) => theme.font.size.medium};
    }
`;

export const UserEmail = styled.h3<any>`
    color: ${({ theme }) => theme.color.text.light};
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: normal;

    @media (max-width: 800px) {
        font-size: ${({ theme }) => theme.font.size.small};
    }
`;

export const TitleModal = styled.h3`
    font-size: 1.625rem;
    color: ${({ theme }) => theme.color.text.dark};
`;

export const SubtitleModal = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.color.text.dark};
`;

export const SectionTitleNotification = styled.span<IGlobalStyled>(
    ({ theme, flex }) => ({
        fontSize: theme.font.size.large,
        fontWeight: "bold",
        flex: flex,
        paddingLeft: "10px",
    })
);

export const TextNotification = styled.p<any>(({ theme, read }: any) => ({
    display: "flex",
    alignItems: "center",
    maxWidth: "385px",
    lineHeight: "20px",
    fontSize: theme.font.size.medium,
    "&:hover": {
        color: !read && theme.color.primary.main,
    },
}));

export const Icon = styled.div``;

export const DateNotification = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 40px;
    color: ${({ theme }) => theme.color.text.light};
    font-size: ${({ theme }) => theme.font.size.small};
    margin-bottom: ${({ theme }) => theme.shape.small};
`;

export const Link = styledMui(NavLink)<any>(() => ({
    textDecoration: "none",
    width: "100%",
    "&:hover": {
        background: STYLED_THEME.color.background.soft,
    },
}));

export const Loading = styled.div`
    padding: ${({ theme }) => theme.shape.small};
`;

export const StyledPaper = styled(Paper)<any>(
    ({ theme, _visibility, gap, paper_width }) => ({
        display: _visibility === "true" ? "flex" : "none",
        visibility: _visibility === "true" ? "visible" : "hidden",
        flexDirection: "column",
        gap: setSpacing(gap),
        position: "absolute",
        // marginTop: "38px",
        right: "20px",
        width: "400px",
        zIndex: 3,

        "::-webkit-scrollbar": {
            width: "10px",
            height: "10px",
        },
    })
);
