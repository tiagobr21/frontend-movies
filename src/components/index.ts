import { motion } from "framer-motion";
import styled from "styled-components";

import { setSpacing } from "../styles/theme/utils";

import { IGlobalStyled } from "./types";

export const Page = styled.div<IGlobalStyled>`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 50px 0px 50px;

    ${({ justify, align, height }) => `
		justify-content: ${justify ? justify : "flex-start"};
		align-items: ${align ? align : "flex-start"};
		height: ${height ? height : "auto"} ;
		gap: ${setSpacing("medium")};
		);
	`};
`;

export const PageTitle = styled.h2<IGlobalStyled>`
    ${({ theme, justify, fullWidth: full_width }) => `
		font-size: ${theme.font.size.grand};
		color:${theme.color.text.default.dark};
		text-align: ${justify ? justify : "left"};
		width: ${full_width ? "100%" : "auto"};
        font-weight: 600;
	`};
`;

export const PageHeader = styled.header<IGlobalStyled>`
    display: flex;
    flex-direction: column;
    gap: ${setSpacing("medium")};
`;

export const PageActions = styled.div<IGlobalStyled>`
    display: flex;
    justify-content: ${({ justify }) => (justify ? justify : "space-between")};
    align-items: center;

    ${({ width }) => `
		gap: ${setSpacing("small")};
		width: ${width ? width : "100%"};
	`}

    @media (max-width: 800px) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
        height: auto;
    }
`;

export const Box = styled.div<IGlobalStyled>`
    ${({
        flex,
        justify,
        align,
        wrap,
        direction,
        gap,
        padding,
        height,
        top,
        right,
        border_bottom,
        background,
        display,
        theme,
    }) => `
        display: ${display ? display : "flex"};
		flex: ${flex ? flex : null};
		flex-direction: ${direction === "row" ? "row" : "column"};
		flex-wrap: ${wrap ? wrap : "auto"};

		justify-content: ${justify ? justify : "flex-start"};
		align-items: ${align ? align : "flex-start"};

		gap: ${setSpacing(gap ? gap : "none")};
		padding: ${padding ? padding : "auto"};
		height: ${height ? height : "auto"};
        margin-top: ${top && top};
        margin-right: ${right && right};
		background-color: ${background};

        border-bottom: ${
            border_bottom ? `1px solid ${theme.color.borderBottom}` : "none"
        };
	`};

    width: ${({ width, fullWidth: full_width }) => {
        if (full_width) {
            return "100%";
        } else {
            return width ? width : "auto";
        }
    }};

    @media (max-width: 800px) {
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
    }
`;

export const Card = styled.div<IGlobalStyled>`
    ${({
        theme,
        direction,
        justify,
        align,
        padding,
        gap,
        width,
        maxWidth,
        maxHeight,
        overflow,
        wrap,
        display,
    }) => `
        display: ${display ? display : "flex"};
        flex-wrap: ${wrap ? wrap : "auto"};
        flex-direction: ${direction ? direction : "row"};
        justify-content: ${justify ? justify : "flex-start"};
        align-items: ${align ? align : "flex-start"};
        gap: ${setSpacing(gap ? gap : "medium")};

        max-width: ${maxWidth ? maxWidth : "auto"};
        width: ${width ? width : "100%"};
        max-height: ${maxHeight ? maxHeight : "auto"};
        padding: ${setSpacing(padding ? padding : "large")};

        background-color:${theme.color.background.default};
        border-radius:${theme.shape.radius.small};
        box-shadow: ${theme.shadow[4]};

        overflow: ${overflow ? overflow : "hidden"};
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft .3s forwards;
    `}
    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: initial;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
        width: auto;
        max-width: auto;
        max-height: auto;
    }
`;

export const Row = styled.div<IGlobalStyled>`
    ${({ top, auto, gap, wrap }) => `
        display: flex;
        flex-wrap:${wrap ? wrap : "auto"};
        flex-direction: row;
        
        margin-top: ${top && top};
        
        width: ${auto ? "auto" : "100%"};
        gap: ${setSpacing(gap ? gap : "medium")};
    `};

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Article = styled.article<IGlobalStyled>`
    display: flex;
    gap: ${({ theme }) => theme.spacing.large};
    flex-direction: column;
    height: 100%;
`;

export const Welcome = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    ${({ theme }) => `
        gap: ${theme.spacing.small};
    `};
`;

export const Title = styled.h1`
    ${({ theme }) => `
        font-size: ${theme.font.size.grand};
    `};
`;

export const Description = styled.p<IGlobalStyled>`
    ${({ theme, align, nowrap }) => `
        font-size:${theme.font.size.medium};
        color: ${theme.color.text.light};
        text-align: ${align ? align : "start"};
        white-space: ${nowrap && "nowrap"};
    `};
`;

export const SectionTitle = styled.span<IGlobalStyled>(({ theme, flex }) => ({
    fontSize: theme.font.size.small,
    fontWeight: "bold",
    flex: flex,
}));

export const FooterActions = styled.div`
    display: flex;
    width: 100%;
    gap: ${setSpacing("small")};
    justify-content: flex-end;
`;

export const FooterForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 179px;
        height: 33px;
    }
`;

export const TableActions = styled.div<any>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify }) => (justify ? justify : "flex-end")};
    width: 100%;
    gap: 5px;
`;
