import { ArrowLeft, ArrowRight } from "react-feather";

import { Container, CurrentPage, Navigator, TotalPages } from "./styles";

function PageNavigator({ currentPage, goBackPage, nextPage, qtdPages }: any) {
    return (
        <Container>
            <Navigator disabled={currentPage <= 1} onClick={goBackPage}>
                <ArrowLeft />
            </Navigator>

            <CurrentPage>{currentPage}</CurrentPage>

            <Navigator disabled={currentPage >= qtdPages} onClick={nextPage}>
                <ArrowRight />
            </Navigator>

            <TotalPages>de {qtdPages}</TotalPages>
        </Container>
    );
}

export default PageNavigator;
