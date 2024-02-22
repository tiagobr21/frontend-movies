import * as Yup from "yup";

import { GLOBAL_TEXTS } from "../../configs";

export const YUP_USER_NAME = Yup.string().required(
    GLOBAL_TEXTS.FORM.required_field
);

