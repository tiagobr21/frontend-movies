import { Film, List, Plus, UserCheck, UserPlus } from "react-feather"
import { APP_ROUTES } from "../../routes/configs"

const STACK_ONE_ITEMS = [
    {
        label: "USUÁRIOS",
        nested_routes: [
            {
                label: APP_ROUTES.USERS.REGISTER.title,
                icon: UserPlus,
                path: `${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.REGISTER.path}`,
            },
            {
                label: APP_ROUTES.USERS.LIST.title,
                icon: UserCheck,
                path: `${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`,
            }
        ]
    },
    {
        label: "FILMES",
        nested_routes: [
            {
                label: APP_ROUTES.MOVIE.REGISTER.title,
                icon: Plus,
                path: `${APP_ROUTES.MOVIE.path}/${APP_ROUTES.MOVIE.REGISTER.path}`,
            },
            {
                label: APP_ROUTES.MOVIE.LIST.title,
                icon: List,
                path: `${APP_ROUTES.MOVIE.path}/${APP_ROUTES.MOVIE.LIST.path}`,
            }
        ]
    }
]

export const MENU_ITEMS = [
    {
        id: "STACK_ONE",
        items: STACK_ONE_ITEMS,
    }
]