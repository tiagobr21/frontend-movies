import { Avatar } from "@mui/material";
import styled from "styled-components";

export const AvatarMui = styled(Avatar)<any>`
    && {
        background-color: ${({ theme }) => theme.color.primary.main};
        font-size: ${({ theme }) => theme.font.size.medium};
        font-weight: bold;

        @media (max-width: 800px) {
            width: 25px;

            height: 25px;

            font-size: 12px;
        }
    }
`;
