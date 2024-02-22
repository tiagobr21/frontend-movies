export const APP_ROUTES = {
    APP_ROOT: {
        path: "WATCH",
        title: "WATCH",
    },

    SIGNIN: {
        path: "sign-in",
        title: "Acesso WATCH",
    },

    USERS: {
        path: "users",
        title: "Usuários",
        
        LIST: {
            path:"list",
            title: "Listagem de Usuários",
        },

        REGISTER: {
            path: "register",
            title: "Cadastro de Usuário",
        },

        EDIT: {
            path: "edit-user/:id",
            title: "Editar Usuário",
        }
    },

    MOVIE: {
        path: "movie",
        title: "Filmes",

        LIST: {
            path:"list",
            title: "Listagem de Filmes",
        },

        REGISTER: {
            path: "register",
            title: "Cadastro de Filme",
        },

        EDIT: {
            path: "edit-movie/:id",
            title: "Editar Filme",
        }
    }
}