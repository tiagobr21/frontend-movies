import { useState } from "react";
import { Eye as Visibility, EyeOff as VisibilityOff } from "react-feather";

import { useFormik } from "formik";
import * as yup from "yup";

import {
    ContainerLogin,
    LoginSide,
} from "./styles";

import {
    Box,
    Description,
    FooterForm,
    Row,
    Title,
    Welcome,
} from "../../components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";

import { YUP_EMAIL, YUP_PASSWORD } from "../../yup/Auth";

export default function SignIn() {
    const { signIn } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const SIGN_SCHEMA = yup.object({
        email: YUP_EMAIL,

        password: YUP_PASSWORD,
    });

    const formik = useFormik({
        initialValues: {
            email: "",

            password: "",
        },

        validationSchema: SIGN_SCHEMA,

        onSubmit: (e) => {
            signIn({
                email: formik.values.email,

                password: formik.values.password,
            });
            formik.handleReset(e);
        },
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const visibilityIcon = () => {
        return showPassword ? VisibilityOff : Visibility;
    };

    const IS_PASSWORD = showPassword === true ? "text" : "password";

    return (
        <ContainerLogin>
            <Box
                flex="1"
                direction="row"
                justify="center"
                align="center"
                gap="7.75rem"
            >
                <Box height="500px" width="492px" gap="55px">
                    <LoginSide>
                        <form onSubmit={formik.handleSubmit}>
                            <Welcome>
                                <Title>Login</Title>

                                <Description align="center">
                                    Bem-vindo ao sistema
                                </Description>
                            </Welcome>

                           <>
                                <Row top="50px">
                                    <Input
                                        id="email"
                                        name="email"
                                        label="Login"
                                        type="text"
                                        placeholder="Insira seu email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={
                                            formik.touched.email &&
                                            Boolean(
                                                formik.errors.email
                                            )
                                        }
                                        helperText={
                                            formik.touched.email &&
                                            formik.errors.email
                                        }
                                        required={SIGN_SCHEMA}
                                    />
                                </Row>

                                <Row top="50px">
                                    <Input
                                        id="password"
                                        name="password"
                                        label="Senha"
                                        type={IS_PASSWORD}
                                        placeholder="Insira senha"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        error={
                                            formik.touched.password &&
                                            Boolean(formik.errors.password)
                                        }
                                        helperText={
                                            formik.touched.password &&
                                            formik.errors.password
                                        }
                                        iconAction={handleShowPassword}
                                        icon={visibilityIcon()}
                                        iconPosition="end"
                                        required={SIGN_SCHEMA}
                                    />
                                </Row>

                                <Box width="100%" top="50px">
                                    <Button
                                        type="submit"
                                        value="Entrar"
                                        onClick={formik.handleSubmit}
                                        width="100%"
                                        uppercase="false"
                                    />
                                </Box>
                            </>
                        </form>
                    </LoginSide>
                </Box>
            </Box>
        </ContainerLogin>
    );
}
