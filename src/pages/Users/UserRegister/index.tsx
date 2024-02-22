import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle, Eye, EyeOff } from "react-feather";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { Card, FooterActions, Page, PageHeader, Row } from "../../../components";
import Breadcrumbs from "../../../components/Breadcrumb";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Section from "../../../components/Section";
import { useRedirect } from "../../../hooks/useRedirect";
import userService from "../../../services/user/userService";
import { initValuesUser, renderBreadCrumbsLinks } from "./mock";
import { USER_EDIT_SCHEMA, USER_REGISTER_SCHEMA } from "./yup";

export default function UserRegister() {
    const styledTheme = useTheme();
    const { goToListUser } = useRedirect();
    const { id } = useParams();
    const isEdit = id ? true : false;
   
    const [showPassword, setShowPassword] = useState(false);

    const _initValues = isEdit
        ? {
            email: "",
            name: "",
        }
        : initValuesUser;

    const formik = useFormik({
        initialValues: _initValues,
        validationSchema: isEdit ? USER_EDIT_SCHEMA : USER_REGISTER_SCHEMA,
        onSubmit: () => {
            if (isEdit) {
                userService
                    .updateUser(Number(id), {
                        email: formik.values.email,
                        name: formik.values.name
                    })
                    .then(() => {
                        const message =
                            "Dados do usuário alterado com sucesso!";

                        toast.success(message, {
                            toastId: "NOTIFY_UPDATE_USER",
                            icon: (
                                <CheckCircle
                                    color={styledTheme.color.success.main}
                                />
                            ),
                        });

                        goToListUser();
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
                userService
                    .createUser({
                        email: formik.values.email,
                        password: formik.values.password,
                        name: formik.values.name,
                    })
                    .then(() => {
                        const msgSuccess = "Usuário cadastrado com Sucesso!";
                        toast.success(msgSuccess, {
                            toastId: "NOTIFY_REGISTER_USER_SUCCESS",
                            icon: (
                                <CheckCircle
                                    color={styledTheme.color.success.main}
                                />
                            ),
                        });
                        goToListUser();
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
                    })
            }
        },
    });

    useEffect(() => {
        if (isEdit === false) {
            formik.resetForm();
        }
    }, [isEdit]);

    useEffect(() => {
        if (isEdit) {
            formUserEdit();
        }
    }, [])

    const IS_PASSWORD = showPassword === true ? "text" : "password";

    const visibilityIcon = () => {
        return showPassword ? Eye : EyeOff;
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function formUserEdit() {
        userService.getOneUser(Number(id)).then((res) => {
            const response = res.data;
            const { email, name } = response;
            formik.setFieldValue("name", name);
            formik.setFieldValue("email", email);
        });
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
                            id="watch_user_email"
                            name="email"
                            label="Email do usuário"
                            placeholder="Insira o email do usuário"
                            labelInfo="Informe um E-mail válido"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                            required={USER_REGISTER_SCHEMA}
                            width="260px"
                        />

                        <Input
                            id="watch_user_name"
                            name="name"
                            label="Nome do usuário"
                            placeholder="Insira o nome do usuário"
                            labelInfo="Mín. 2 | Máx. 50 caracteres"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                            }
                            helperText={
                                formik.touched.name && formik.errors.name
                            }
                            required={USER_REGISTER_SCHEMA}
                            width="260px"
                        />
                    </Row>
                    {!isEdit &&
                        <Row>
                            <Input
                                id="password"
                                name="password"
                                label="Senha"
                                type={IS_PASSWORD}
                                placeholder="********"
                                value={formik.values.password}
                                labelInfo="Mín. 4 | Máx. 20 caracteres | letras maiúsculas, minúsculas e números ou caracteres especiais"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.password &&
                                    Boolean(formik.errors.password)
                                }
                                helperText={
                                    formik.touched.name && formik.errors.password
                                }
                                iconAction={handleShowPassword}
                                icon={visibilityIcon()}
                                iconPosition="end"
                                width="250px"
                                required={USER_REGISTER_SCHEMA}
                            />
                        </Row>
                    }
                </Section>
                <FooterActions>
                    <Button
                        type="submit"
                        value="Cancelar"
                        onClick={goToListUser}
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