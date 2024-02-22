import {
    Article,
    Box,
    Column,
    Container,
    DataTable,
    Description,
    Pagination,
    TableFooter,
    TableWrapper,
    TBody,
    THeader,
    Title,
    TRow,
} from "./styles";

import LoaderLocal from "../LoaderLocal";

import PageNavigator from "./components/PageNavigator";

import EmptyData from "../../assets/svg/emptyData.svg";

import { IDataTableProps } from "./types";

import { GLOBAL_TEXTS } from "../../configs";

function Table({
    columns,
    rows,
    total,
    currentPage,
    isLoading,
    emptySearch,
    disablePagination,
    height,
    sticky,
    noPagination = false,
}: IDataTableProps) {
    const nextPage = () => {
        if (currentPage && total) {
            if (currentPage.value < total) {
                currentPage.setState((prevPage: any) => prevPage + 1);
            }
        }
    };

    const goBackPage = () => {
        if (currentPage) {
            if (currentPage.value > 1) {
                currentPage.setState((prevPage: any) => prevPage - 1);
            }
        }
    };

    const Navigator = () =>
        !disablePagination ? (
            <PageNavigator
                currentPage={currentPage && currentPage.value}
                goBackPage={goBackPage}
                nextPage={nextPage}
                qtdPages={total}
            />
        ) : null;

    const composeTable = () => {
        return rows.length > 0 ? (
            <Box>
                <TableWrapper>
                    <DataTable columns={columns}>
                        <THeader sticky={sticky?.toString()}>
                            <TRow header>
                                {columns?.map((column: any, index: any) => (
                                    <Column
                                        key={index}
                                        width={column?.width}
                                        justify={column?.lastColumn}
                                    >
                                        {column?.name}
                                    </Column>
                                ))}
                            </TRow>
                        </THeader>

                        <LoaderLocal loading={isLoading} />

                        <TBody>
                            {rows?.map((item: any, index: any) => (
                                <TRow body key={index}>
                                    {columns?.map((column: any) =>
                                        Object.entries(item).map(
                                            (key) =>
                                                column?.field === key[0] && (
                                                    <Column
                                                        key={index}
                                                        width={column?.width}
                                                        justify={
                                                            column?.lastColumn
                                                        }
                                                    >
                                                        {key[1]}
                                                    </Column>
                                                )
                                        )
                                    )}
                                </TRow>
                            ))}
                        </TBody>
                    </DataTable>
                </TableWrapper>

                {noPagination ? null : (
                    <TableFooter>
                        <Pagination>
                            <Navigator />
                        </Pagination>
                    </TableFooter>
                )}
            </Box>
        ) : (
            <Article>
                <Box
                    direction="column"
                    justify="center"
                    align="center"
                    gap="15px"
                >
                    <Title>
                        {GLOBAL_TEXTS.LIST.empty_list.title}
                    </Title>

                    <Description>
                        {GLOBAL_TEXTS.LIST.empty_list.description}
                    </Description>
                </Box>

                <img src={EmptyData} width="260px" alt="Empty table" />
            </Article>
        );
    };

    return (
        <Container height={height}>
            {isLoading ? (
                <LoaderLocal loading={true} height="60%" />
            ) : (
                composeTable()
            )}
        </Container>
    );
}
export default Table;
