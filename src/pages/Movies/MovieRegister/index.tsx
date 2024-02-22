import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle } from "react-feather";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { Card, FooterActions, Page, PageHeader, Row } from "../../../components";
import Breadcrumbs from "../../../components/Breadcrumb";
import Input from "../../../components/Input";
import Section from "../../../components/Section";
import { useRedirect } from "../../../hooks/useRedirect";
import { IMovie } from "../../../models/interfaces/IMovie";
import movieService from "../../../services/movie/movieService";
import { formatNumber } from "../../../utils/format";
import { renderBreadCrumbsLinks } from "./mock";
import { MOVIE_REGISTER_SCHEMA } from "./yup";
import Button from "../../../components/Button";

export default function MovieRegister() {
    const styledTheme = useTheme();
    const { goToListMovie } = useRedirect();
    const { id } = useParams();
    const isEdit = id ? true : false;

    const [payloadMovie, setPayloadMovie] = useState<IMovie>({
        title: "",
        genre: "",
        releaseYear: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    const _initValues = {
        title: "",
        genre: "",
        releaseYear: ""
    }

    const formik = useFormik({
        initialValues: _initValues,
        validationSchema: MOVIE_REGISTER_SCHEMA,
        onSubmit: () => {
            if (isEdit) {
                movieService.updateMovie(Number(id), payloadMovie)
                    .then(() => {
                        const message =
                            "Dados do filme alterado com sucesso!";

                        toast.success(message, {
                            toastId: "NOTIFY_UPDATE_MOVIE",
                            icon: (
                                <CheckCircle
                                    color={styledTheme.color.success.main}
                                />
                            ),
                        });

                        goToListMovie();
                    })
                    .catch(() => {
                        const message = 'Um ou mais campos inválidos!';

                        toast.error(message, {
                            toastId: "NOTIFY_ERROR_UPDATE_USER",
                            icon: (
                                <AlertCircle
                                    color={styledTheme.color.error.main}
                                />
                            ),
                        });
                    });
            } else {
                movieService.createMovie(payloadMovie)
                    .then(() => {
                        const msgSuccess = "Filme  cadastrado com Sucesso!";
                        toast.success(msgSuccess, {
                            toastId: "NOTIFY_REGISTER_MOVIE_SUCCESS",
                            icon: (
                                <CheckCircle
                                    color={styledTheme.color.success.main}
                                />
                            ),
                        });
                        goToListMovie();
                    })
                    .catch(() => {
                        const message = "Um ou mais campos inválidos!";
                        toast.error(message, {
                            toastId: "NOTIFY_REGISTER_USER_ERROR",
                            icon: (
                                <AlertCircle
                                    color={styledTheme.color.error.main}
                                />
                            ),
                        });
                    });
            };
        }
    });

    useEffect(() => {
        if (isEdit === false) {
            formik.resetForm();
            setPayloadMovie({
                title: "",
                genre: "",
                releaseYear: ""
            })
        }
    }, [isEdit]);

    useEffect(() => {
        if (isEdit) {
            formMovieEdit();
        }
    }, []);

    useEffect(() => {
        setPayloadMovie((prev: IMovie) => ({
            ...prev,
            title: formik?.values.title,
            genre: formik?.values.genre,
        }))
    }, [formik?.values]);

    function formMovieEdit() {
        movieService.getOneMovie(Number(id)).then((res) => {
            const response = res.data.movie;
        
            const { title, genre, releaseYear } = response;
            formik.setFieldValue("title", title);
            formik.setFieldValue("genre", genre);
            formik.setFieldValue("releaseYear", releaseYear);
            setPayloadMovie((state: IMovie) => ({
                ...state,
                title: title,
                genre: genre,
                releaseYear: releaseYear,
            }))
        });
    }

    const onChangeReleaseYer = (e: any) => {
        const value = formatNumber(e.target.value);

        setPayloadMovie((prev: any) => ({
            ...prev,
            releaseYear: value,
        }));

        formik.setFieldValue("releaseYear", value);
    }

    return (
        <Page>
            <PageHeader>
                <Breadcrumbs
                    links={renderBreadCrumbsLinks(isEdit)}
                    underline={true}
                />
            </PageHeader>

            <Card direction="column">
                <Section title="Dados do usuário">
                    <Row>
                        <Input
                            id="watch_movie_title"
                            name="title"
                            label="Título do filme"
                            placeholder="Insira o título do filme"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.title &&
                                Boolean(formik.errors.title)
                            }
                            helperText={
                                formik.touched.title && formik.errors.title
                            }
                            required={MOVIE_REGISTER_SCHEMA}
                            width="260px"
                        />

                        <Input
                            id="watch_movie_genre"
                            name="genre"
                            label="Gênero do Filme"
                            placeholder="Insira o gênero do filme"
                            value={formik.values.genre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.genre &&
                                Boolean(formik.errors.genre)
                            }
                            helperText={
                                formik.touched.genre && formik.errors.genre
                            }
                            required={MOVIE_REGISTER_SCHEMA}
                            width="260px"
                        />
                    </Row>

                    <Row>
                        <Input
                            id="watch_movie_releaseYear"
                            name="releaseYear"
                            label="Ano de lançamento do filme"
                            placeholder="Insira o ano de lançamento do filme"
                            value={payloadMovie.releaseYear}
                            onChange={onChangeReleaseYer}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.releaseYear &&
                                Boolean(formik.errors.releaseYear)
                            }
                            helperText={
                                formik.touched.releaseYear && formik.errors.releaseYear
                            }
                            required={MOVIE_REGISTER_SCHEMA}
                            width="260px"
                        />
                    </Row>
                </Section>
                <FooterActions>
                    <Button
                        type="submit"
                        value="Cancelar"
                        onClick={goToListMovie}
                        variant="outlined"
                        width="auto"
                    />

                    <Button 
                        type="submit"
                        value="Cadastrar"
                        onClick={formik.handleSubmit}
                        disabled={!formik?.isValid}
                        width="auto"
                    />
                </FooterActions>
            </Card>
        </Page>
    )
}