import { ILinkBreadcrumb } from "../../../models/interfaces/ILinkBreadcrumb";
import { APP_ROUTES } from "../../../routes/configs";

const urlPath = `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`;

export function renderBreadCrumbsLinks(hasID: boolean): ILinkBreadcrumb[] {
    return [
        {
            id: 1,
            name: "Watch",
            path: urlPath,
        },
        {
            id: 2,
            name: "Usuários",
            path: urlPath,
        },
        {
            id: 3,
            name: hasID ? "Editar usuário" : "Cadastro",
            fontWeight: "bold",
        },
    ];
}

export const initValuesUser: any = {
    email: "",
    name: "",
    password: "",
};
