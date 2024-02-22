import { Box, CircularProgress, circularProgressClasses } from "@mui/material";
import { useTheme } from "styled-components";

import { Container } from "./styles";

import { ILoaderLocalProps } from "./types";

function LoaderLocal({
    loading,
    width,
    size,
    height,
    position,
    ...props
}: ILoaderLocalProps) {
    const styledTheme = useTheme();

    if (loading) {
        return (
            <Container width={width} height={height} position={position}>
                <Box sx={{ position: "relative" }}>
                    <CircularProgress
                        variant="determinate"
                        sx={{
                            color: "#dddddd",
                        }}
                        size={size ? size : 100}
                        thickness={6}
                        {...props}
                        value={100}
                    />

                    <CircularProgress
                        disableShrink
                        variant="indeterminate"
                        sx={{
                            color: styledTheme.color.primary.main,
                            animationDuration: "650ms",
                            position: "absolute",
                            left: 0,
                            [`& .${circularProgressClasses.circle}`]: {
                                strokeLinecap: "round",
                            },
                        }}
                        size={size ? size : 100}
                        thickness={6}
                        {...props}
                    />
                </Box>
            </Container>
        );
    }

    return null;
}

export default LoaderLocal;
