import * as Yup from "yup";
import { GLOBAL_TEXTS } from "../../../configs";

export const MOVIE_REGISTER_SCHEMA = Yup.object().shape({
    title: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
    genre: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
    releaseYear: Yup.string()
        .required(GLOBAL_TEXTS.FORM.required_field),
})