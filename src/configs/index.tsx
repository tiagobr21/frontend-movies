export const APP_SETTINGS = {
    project_version: "0.0.0",

    TOAST: {
        timeout: 5000,
    },

    STORAGE_KEYS: {
        token: "_TOKEN",
    },

    COMPONENTS: {
        inputs_tooltip_key: "WATCH-",
        filter_paper_width: "500px",
    },
};

export const GLOBAL_TEXTS = {
    project_name: "WATCH",
    not_applicable: "-",

    FORM: {
        required_field_symbol: "ㅤ*",
        required_field: "Campo Obrigatório",
        invalid_email: "Email inválido!",
    },

    LIST: {
        empty_list: {
            title: "Não há Itens Registrados",

            description: (
                <p style={{ textAlign: "center" }}>
                    Registre um item para exibir suas <br /> informações aqui.
                </p>
            ),
        },
    },
};
