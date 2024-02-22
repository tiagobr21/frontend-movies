import * as Yup from "yup";
import { GLOBAL_TEXTS } from "../../../configs";

export const USER_REGISTER_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
    password: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
    email: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
})

export const USER_EDIT_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
    email: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
})