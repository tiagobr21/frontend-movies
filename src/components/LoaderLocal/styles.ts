import styled from "styled-components";

export const Container = styled.div<any>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${({ position }) => (position ? position : "absolute")};
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
`;
