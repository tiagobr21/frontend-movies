import * as Yup from "yup";

import { GLOBAL_TEXTS } from "../../configs";

export const YUP_EMAIL = Yup.string().required(
    GLOBAL_TEXTS.FORM.required_field
);

export const YUP_PASSWORD = Yup.string().required(
    GLOBAL_TEXTS.FORM.required_field
);


