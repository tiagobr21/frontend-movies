import { ILinkBreadcrumb } from "../../models/interfaces/ILinkBreadcrumb";
import { APP_ROUTES } from "../../routes/configs";
import { IDataTableColumns } from "../../types/DataTable";

export const BREADCRUMBS_LINKS: ILinkBreadcrumb[] = [
    {
        id: 1,
        name: "Watch",
        path: `/${APP_ROUTES.MOVIE.path}`,
    },
    {
        id: 2,
        name: "Usuários",
        path: `/${APP_ROUTES.MOVIE.path}/${APP_ROUTES.MOVIE.LIST.path}`,
    },
    {
        id: 3,
        name: "Listagem",
        path: `/${APP_ROUTES.MOVIE.path}/${APP_ROUTES.MOVIE.LIST.path}`,
        fontWeight: "bold",
    },
];

export const LIST_COLUMNS: IDataTableColumns[] = [
    {
        field: "id",
        name: "Id",
        width: "20%"
    },
    {
        field: "title",
        name: "Título do Filme",
        width: "20%",
    },
    {
        field: "genre",
        name: "Gênero do filme",
        width: "20%",
    },
    {
        field: "releaseYear",
        name: "Ano de lançamento",
        width: "20%",
    },
    {
        field: "actions",
        name: "Ações",
        width: "20%",
        lastColumn: true,
    }
]