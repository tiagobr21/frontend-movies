import { IconButton as IconButtonMUI } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div<any>`
    display: flex;

    justify-content: center;

    align-items: space-between;

    width: 100%;

    min-height: ${({ height }) => (height ? height : "530px")};

    border-radius: ${({ theme }) => theme.shape.radius.medium};

    background-color: ${({ theme }) => theme.color.neutral[10]};

    box-shadow: 0px 1px 4px ${({ theme }) => theme.color.fade.dark};
`;

export const Box = styled.div<any>`
    display: flex;

    justify-content: space-between;

    align-items: space-between;

    flex-direction: column;

    width: 100%;
    gap: ${({ theme }) => theme.spacing.small};
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: initial;
        }
    }
`;

export const Article = styled.article<any>`
    display: flex;

    justify-content: center;

    align-items: center;

    flex-direction: column;

    gap: ${({ theme }) => theme.spacing.medium};

    padding: ${({ theme }) => theme.spacing.large};
`;

export const Title = styled.h2<any>`
    font-size: ${({ theme }) => theme.font.size.grand};
    text-align: center;
`;

export const Description = styled.h4<any>`
    color: ${({ theme }) => theme.color.text.light};

    font-size: ${({ theme }) => theme.font.size.medium};

    font-weight: normal;
`;

export const TableWrapper = styled.div`
    overflow-x: auto;
    width: 100%;
    height: 100%;
`;

export const DataTable = styled.table<any>`
    display: flex;

    justify-content: flex-start;

    align-items: center;

    flex-direction: column;

    position: relative;

    width: ${({ columns }) => `${columns.length * 160}px`};

    min-width: 100%;

    height: 100%;
`;

export const THeader = styled.thead<any>`
    width: 100%;

    background-color: ${({ theme }) => theme.color.primary.main};

    font-weight: bold;

    border-radius: ${({ theme }) => theme.shape.radius.medium};

    position: ${({ sticky }) => (sticky === "true" ? "sticky" : "none")};

    top: 70px;

    z-index: 1;

    @media (max-width: 800px) {
        position: sticky;

        top: 0px;

        z-index: 1;

        border-radius: "0 0


            ${({ theme }) => theme.shape.radius.medium}


            ${({ theme }) => theme.shape.radius.medium}";
    }
`;

export const TBody = styled.tbody<any>`
    width: 100%;
`;

export const TRow = styled.tr<any>`
    display: flex;

    justify-content: space-between;

    align-items: center;

    width: 100%;

    padding: 8px ${({ theme }) => theme.spacing.medium};

    border-bottom: 1px solid ${({ theme }) => theme.color.neutral[7]};

    color: ${({ theme, header }) =>
        !header ? theme.color.text.main : theme.color.text.default.light};

    word-break: break-word;

    &:hover {
        background-color: ${({ theme, body }) =>
            body && theme.color.background.soft};
    }
`;

export const Column = styled.td<any>`
    display: flex;

    align-items: center;

    justify-content: ${({ justify }) => (justify ? "flex-end" : "flex-start")};

    text-align: ${({ justify }) => (justify ? "right" : "flex-start")};

    width: ${({ width }) => (width ? width : "auto")};

    min-height: 54px;
    margin: 0px 10px;
    gap: ${({ theme }) => theme.spacing.small};

    font-weight: ${({ color_mode }) => (color_mode ? "bold" : "400")};
    font-size: 14px;
`;

export const TableFooter = styled.footer<any>`
    width: 100%;

    padding: ${({ theme }) => theme.spacing.medium};
`;

export const IconButton = styled(IconButtonMUI)<any>`
    display: flex;

    justify-content: center;

    align-items: center;

    background: none;

    border: none;

    padding: ${({ theme }) => theme.spacing.small};

    width: 40px;

    height: 40px;

    cursor: pointer;
`;

export const Pagination = styled.div<any>`
    display: flex;

    justify-content: flex-end;

    align-items: center;

    gap: ${({ theme }) => theme.spacing.small};

    @media (max-width: 800px) {
        justify-content: center;
    }
`;
