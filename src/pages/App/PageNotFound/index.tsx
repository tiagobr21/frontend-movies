import { useMediaQuery } from "@mui/material";

import { CodeText, Container, Description } from "./styles";

import { Box } from "../../../components";


export default function PageNotFound() {
    const isTabletScreen = useMediaQuery("(max-width: 800px)");

    return (
        <Container is_tablet_screen={isTabletScreen.toString()}>
            <Box width="50vw" direction="row" align="center" gap="medium">
                <Box width="60%" justify="center" align="center" gap="small">
                    <CodeText is_tablet_screen={isTabletScreen.toString()}>
                        404
                    </CodeText>

                    <Description is_tablet_screen={isTabletScreen.toString()}>
                        Desculpe, mas parece que você caiu em uma página que não
                        existe. Verifique se digitou o endereço corretamente ou
                        tente pesquisar novamente.
                    </Description>
                </Box>
            </Box>
        </Container>
    );
}
