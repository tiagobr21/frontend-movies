import styled from "styled-components";

import BANNER from "../../assets/images/login-banner.png";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

export const HeaderLogin = styled.div`
    height: 120px;
    padding-left: 8.375rem;
    padding-top: 1.625rem;
    ${({ theme }) => `
        background-color: ${theme.color.default.light};
        box-shadow: ${theme.shadow[3]};
    `};
`;

// export const Banner = styled.div`
//     flex: 1;
//     max-width: 984px;
//     max-height: 738px;
//     width: 100%;
//     height: 100%;

//     background-position: center;
//     background-image: url(${BANNER});
//     background-size: cover;
//     overflow: hidden;
// `;

export const LoginSide = styled.div`
    flex: 1;
    height: 50%;
    width: 100%;
    padding: 54px 70px;
    ${({ theme }) => `
        border-radius: ${theme.shape.small};
        box-shadow: ${theme.shadow[2]};
        background-color: ${theme.color.default.light};
    `};

    @media (max-width: 800px) {
        border-radius: 0;
    }
`;

export const BoxTab = styled.div`
    margin-top: 42px;
`;

export const Fields = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
    width: 100%;
`;

export const PasswordButton = styled.div`
    margin-top: 22px;
    text-align: center;
    button {
        border: none;
        font-weight: bold;
        background-color: transparent;
        cursor: pointer;
        ${({ theme }) => `
            color: ${theme.color.primary.main};
        `}
    }
`;
