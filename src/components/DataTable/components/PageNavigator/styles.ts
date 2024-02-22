import { IconButton } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div<any>`
    display: flex;
    gap: 10px;
`;

export const CurrentPage = styled.div<any>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;

    font-size: ${({ theme }) => theme.font.size.small};

    color: ${({ theme }) => theme.color.text.default.light};
    background-color: ${({ theme }) => theme.color.primary.main};
    border-radius: ${({ theme }) => theme.shape.radius.small};
`;

export const Navigator = styled(IconButton)<any>`
    && {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 36px;
        height: 36px;

        border-radius: ${({ theme }) => theme.shape.radius.small};

        opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
    }
`;

export const TotalPages = styled.div<any>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.small};
`;
