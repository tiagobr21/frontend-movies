import { ILinkBreadcrumb } from "../../models/interfaces/ILinkBreadcrumb";
import { APP_ROUTES } from "../../routes/configs";
import { IDataTableColumns } from "../../types/DataTable";

export const BREADCRUMBS_LINKS: ILinkBreadcrumb[] = [
    {
        id: 1,
        name: "Watch",
        path: `/${APP_ROUTES.USERS.path}`,
    },
    {
        id: 2,
        name: "Usuários",
        path: `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`,
    },
    {
        id: 3,
        name: "Listagem",
        path: `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`,
        fontWeight: "bold",
    },
];

export const LIST_COLUMNS: IDataTableColumns[] = [
    {
        field: "email",
        name: "Email",
        width: "40%"
    },
    {
        field: "name",
        name: "Name",
        width: "40%",
    },
    {
        field: "actions",
        name: "Ações",
        width: "20%",
        lastColumn: true,
    }
]