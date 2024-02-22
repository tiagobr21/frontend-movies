import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";

export const StyledToast = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        min-width: 100%;

        @media (max-width: 800px) {
            margin-top: "auto";
        }
    }
    .Toastify__toast {
        min-height: 48px;
        width: 400px;
    }

    .Toastify__toast--success {
        border: 1px solid ${({ theme }) => theme.color.success.main};
        color: ${({ theme }) => theme.color.success.dark};

        background-color: ${({ theme }) => theme.color.success.light};
    }

    .Toastify__toast--error {
        border: 1px solid ${({ theme }) => theme.color.error.main};

        color: ${({ theme }) => theme.color.default.dark};
        background-color: ${({ theme }) => theme.color.error.light};
    }
`;
