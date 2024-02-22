import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useTheme } from "styled-components";
import { Box, Page, PageActions, PageHeader, PageTitle, TableActions, Title } from "../../components";
import Breadcrumbs from "../../components/Breadcrumb";
import Button from "../../components/Button";
import Table from "../../components/DataTable";
import Modal from "../../components/Modal";
import { useRedirect } from "../../hooks/useRedirect";
import { APP_ROUTES } from "../../routes/configs";
import movieService from "../../services/movie/movieService";
import { BREADCRUMBS_LINKS, LIST_COLUMNS } from "./mock";
import { IMovie } from "../../models/interfaces/IMovie";
import Tooltips from "../../components/Tooltips";
import { IconButton } from "../../components/DataTable/styles";
import { AlertCircle, CheckCircle, Delete, Edit } from "react-feather";
import { toast } from "react-toastify";

export default function MoviesList() {
    const styledTheme = useTheme();
    const { goToEditMovie } = useRedirect();

    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 8;
    const [listDatasMovie, setListDatasMovie] = useState<any>([]);
    const [idMovie, setIdMovie] = useState<number>(0);

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

    const queryConfigListMovie = {
        onError: () => {
            const clientMessage = "Erro ao tentar se comunicar com a api";
            console.log(isError, error, clientMessage);
        },
    };

    const {
        data,
        error,
        isError,
        isLoading: isFetching,
        refetch,
    } = useQuery(
        ["listMovies", currentPage],
        () => getAllMovies(),

        queryConfigListMovie
    );

    function getAllMovies() {
        return movieService.getAllMovies(currentPage, pageSize);
    };

    useEffect(() => {
        composeList();
    }, [data]);

    const composeList = () => {
        const response: IMovie[] = data?.data.movies;
        const totalPages = data?.data.totalPages;

        setTotalPages(totalPages);

        if(response?.length > 0) {
            const newListDataMovie = response?.map((item) => ({
                ...item,
                actions: (
                    <TableActions>
                        <Tooltips title="Editar">
                            <IconButton onClick={() => goToEditMovie(item?.id as number)
                            }>
                                <Edit />
                            </IconButton>
                        </Tooltips>
                        <Tooltips title="Excluir Filme">
                            <IconButton
                                onClick={() => handleOpenModalDelete(item?.id)
                                }
                            >
                                <Delete />
                            </IconButton>
                        </Tooltips>
                    </TableActions>
                ),
            }));

            setListDatasMovie(newListDataMovie);
        } else {
            setListDatasMovie([]);
        }
    }

    const handleOpenModalDelete = (id: any) => {
        setIdMovie(id);
        setIsOpenDeleteModal(true);
    }

    const handleDeleteMovie = () => {
        movieService
            .deleteMovie(idMovie)
            .then(() => {
                const message = "Filme deletado com sucesso!";
                toast.success(message, {
                    toastId: "DELETE_MOVIE_SUCCESS",
                    icon: (
                        <CheckCircle color={styledTheme.color.success.main} />
                    ),
                });

                setIsOpenDeleteModal(false);
                refetch();
            })
            .catch(() => {
                const message = "Falha ao deletar filme!";
                toast.error(message, {
                    toastId: "DELETE_MOVIE_ERROR",
                    icon: <AlertCircle color={styledTheme.color.error.main} />,
                });
                setIsOpenDeleteModal(false);
            })
    }

    return (
        <Page>
            <PageHeader>
                <Breadcrumbs links={BREADCRUMBS_LINKS} underline={true} />
                <PageTitle>{APP_ROUTES.MOVIE.LIST.title}</PageTitle>
            </PageHeader>

            <PageActions>
                <Modal
                    isOpen={isOpenDeleteModal}
                    width={"auto"}
                    padding={"50px 130px 50px 130px"}
                >
                    <Box gap="large" align="center">
                        <Title>
                            Tem certeza que gostaria <br />
                            de excluir esse
                            filme?
                        </Title>
                    </Box>

                    <PageActions>
                        <Button
                            value="Não"
                            variant="outlined"
                            onClick={() => setIsOpenDeleteModal(false)}
                        />

                        <Button
                            type="submit"
                            value="Sim"
                            onClick={handleDeleteMovie}
                        />
                    </PageActions>
                </Modal>
            </PageActions>

            <Table
                columns={LIST_COLUMNS}
                rows={listDatasMovie}
                total={totalPages}
                currentPage={{
                    value: currentPage,
                    setState: setCurrentPage,
                }}
            />
        </Page>
    )
}