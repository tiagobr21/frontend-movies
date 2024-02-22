import { ILinkBreadcrumb } from "../../../models/interfaces/ILinkBreadcrumb";
import { APP_ROUTES } from "../../../routes/configs";

const urlPath = `/${APP_ROUTES.MOVIE.path}/${APP_ROUTES.MOVIE.LIST.path}`;

export function renderBreadCrumbsLinks(hasID: boolean): ILinkBreadcrumb[] {
    return [
        {
            id: 1,
            name: "Watch",
            path: urlPath,
        },
        {
            id: 2,
            name: "Filmes",
            path: urlPath,
        },
        {
            id: 3,
            name: hasID ? "Editar filme" : "Cadastro",
            fontWeight: "bold",
        },
    ];
}

