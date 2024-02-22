import styled from "styled-components";

export const Container = styled.div<any>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Banner = styled.img<any>`
    width: ${({ is_tablet_screen }) =>
        is_tablet_screen === "true" ? "50%" : "100%"};
    animation: pulse 2s infinite;

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export const CodeText = styled.span<any>`
    font-size: 8vw;
    width: ${({ is_tablet_screen }) =>
        is_tablet_screen === "true" ? "50%" : "100%"};

    text-align: ${({ is_tablet_screen }) =>
        is_tablet_screen === "true" ? "center" : "auto"};

    line-height: ${({ is_tablet_screen }) =>
        is_tablet_screen === "true" ? "auto" : "100px"};

    font-weight: bold;
`;

export const Description = styled.p<any>`
    font-size: ${({ is_tablet_screen }) =>
        is_tablet_screen === "true" ? "12px" : "1vw"};

    width: ${({ is_tablet_screen }) =>
        is_tablet_screen === "true" ? "50%" : "100%"};

    text-align: ${({ is_tablet_screen }) =>
        is_tablet_screen === "true" ? "center" : "auto"};
`;
