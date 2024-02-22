import { Dialog, styled as styledMui } from "@mui/material";
import styled from "styled-components";

import { IModalStyled } from "./types";

export const Overlay = styledMui(Dialog)({
    backdropFilter: "blur(3px)",
});

export const CardModal = styled.div<IModalStyled>`
    align-items: center;
    flex-direction: column;

    width: ${({ width }) => (width ? width : "372px")};
    height: ${({ height }) => (height ? height : "auto")};

    background-color: ${({ theme }) => theme.color.background.default};
    border-radius: ${({ theme }) => theme.shape.radius.medium};
    box-shadow: ${({ theme }) => theme.shadow[1]};
    position: relative;

    overflow-y: ${({ scroll }) => (scroll ? "scroll" : "hidden")};

    @media (max-width: 800px) {
        width: 100%;
        height: auto;
    }
`;

export const Header = styled.header<IModalStyled>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${({ theme }) =>
        `${theme.spacing.small} ${theme.spacing.medium}  ${theme.spacing.small}  ${theme.spacing.medium}`};

    background-color: ${({ theme }) => theme.color.primary.main};

    border-radius: ${({ theme }) =>
        `${theme.shape.radius.medium} ${theme.shape.radius.medium} 0px 0px`};

    @media (max-width: 800px) {
        justify-content: center;
        button {
            width: 100%;
        }
    }
`;

export const Title = styled.h2<IModalStyled>`
    text-align: ${({ justify }) => (justify ? justify : "center")};
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.color.text.default.light};

    @media (max-width: 800px) {
        text-align: center;
    }
`;

export const Description = styled.p<IModalStyled>`
    text-align: ${({ justify }) => (justify ? justify : "center")};
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.text.default.light};
    @media (max-width: 800px) {
        text-align: center;
    }
`;

export const Content = styled.main<IModalStyled>`
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding: ${({ theme, padding }) =>
        padding ? padding : theme.spacing.large};
    gap: ${({ theme }) => theme.spacing.small};
    height: 100%;

    @media (max-width: 800px) {
        flex-wrap: wrap;
    }
`;

export const IconClose = styled.div<IModalStyled>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const Actions = styled.footer<IModalStyled>`
    background: transparent;
    border: none;
    display: flex;
    justify-content: ${({ justify }) => (justify ? justify : "center")};
    gap: ${({ theme }) => theme.spacing.small};
    width: 100%;

    @media (max-width: 800px) {
        flex-wrap: wrap;

        button {
            width: 100%;
        }
    }
`;

export const TextStrong = styled.p<IModalStyled>`
    display: contents;
    font-weight: bold;
`;
