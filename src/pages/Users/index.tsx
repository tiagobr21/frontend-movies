import { useEffect, useState } from "react";
import { Box, Page, PageActions, PageHeader, PageTitle, TableActions, Title } from "../../components";
import Breadcrumbs from "../../components/Breadcrumb";
import Button from "../../components/Button";
import Table from "../../components/DataTable";
import Modal from "../../components/Modal";
import { useRedirect } from "../../hooks/useRedirect";
import { APP_ROUTES } from "../../routes/configs";
import { BREADCRUMBS_LINKS, LIST_COLUMNS } from "./mock";
import { useQuery } from "react-query";
import userService from "../../services/user/userService";
import { IUser } from "../../types/User";
import Tooltips from "../../components/Tooltips";
import { IconButton } from "../../components/DataTable/styles";
import { AlertCircle, CheckCircle, Delete, Edit } from "react-feather";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";

export default function UsersList() {
    const styledTheme = useTheme();
    const { goToEditUser } = useRedirect();
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 8;
    const [listDatasUser, setListDatasUser] = useState<any>([]);
    const [idUser, setIdUser] = useState<number>(0);

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

    const queryConfigListUsers = {
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
        ["litsUsers", currentPage],
        () => getAllUsers(),

        queryConfigListUsers
    );

    function getAllUsers() {
        return userService.getAllUsers(currentPage, pageSize);
    }

    useEffect(() => {
        composeList();
    }, [data]);

    const composeList = () => {
        const response: IUser[] = data?.data.users;
        const totalPages = data?.data.totalPages;

        setTotalPages(totalPages);

        if(response?.length > 0) {
            const newListDataUser = response?.map((item) => ({
                ...item,
                actions: (
                    <TableActions>
                        <Tooltips title="Editar">
                            <IconButton
                                onClick={() => goToEditUser(item?.id as number)}
                            >
                                <Edit />
                            </IconButton>
                        </Tooltips>
                        <Tooltips title="Excluir Usuário">
                            <IconButton
                                onClick={() => 
                                    handleOpenModalDelete(item?.id)
                                }
                            >
                                <Delete />
                            </IconButton>
                        </Tooltips>
                    </TableActions>
                ),
            }));

            setListDatasUser(newListDataUser);
        } else {
            setListDatasUser([]);
        }
    }

    const handleOpenModalDelete = (id: any) => {
        setIdUser(id);
        setIsOpenDeleteModal(true);
    }

    const handleDeleteUser = () => {
        userService
            .deleteUser(idUser)
            .then(() => {
                const message = "Usuário deletado com sucesso!";
                toast.success(message, {
                    toastId: "DELETE_USER_SUCCESS",
                    icon: (
                        <CheckCircle color={styledTheme.color.success.main} />
                    ),
                });

                setIsOpenDeleteModal(false);
                refetch();
            })
            .catch(() => {
                const message = "Falha ao deletar usuário!";
                toast.error(message, {
                    toastId: "DELTE_USER_ERROR",
                    icon: <AlertCircle color={styledTheme.color.error.main} />,
                });
                setIsOpenDeleteModal(false);
            })
    }

    return (
        <Page>
            <PageHeader>
                <Breadcrumbs links={BREADCRUMBS_LINKS} underline={true} />
                <PageTitle>{APP_ROUTES.USERS.LIST.title}</PageTitle>
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
                            usuário?
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
                            onClick={handleDeleteUser}
                        />
                    </PageActions>
                </Modal>
            </PageActions>

            <Table 
                columns={LIST_COLUMNS}
                rows={listDatasUser}
                total={totalPages}
                currentPage={{
                    value: currentPage,
                    setState: setCurrentPage,
                }}
            />
        </Page>
    )
}