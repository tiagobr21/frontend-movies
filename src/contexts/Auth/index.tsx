import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import auth from "../../services/auth";

import { IUser } from "../../types/User";
import { IContext, IProvider, ISignIn } from "./types";

import { APP_SETTINGS } from "../../configs";
import { useRedirect } from "../../hooks/useRedirect";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IProvider) { 
    const { goToSignIn } = useRedirect();

    const token = localStorage.getItem(APP_SETTINGS.STORAGE_KEYS.token);

    const [isGlobalLoading, setIsGlobalLoading] = useState(true);

    const [user, setUser] = useState<IUser>({
        id: "",
        name: "",
        email: "",
    });

    useEffect(() => {
        retrieveUser();
        token && setIsGlobalLoading(false);
    }, [token]);


    async function signIn({ email, password }: ISignIn) {
        setIsGlobalLoading(true);

        const bodyParser = {
            email: email,
            password:password,
        };

        auth.userSignIn(bodyParser)
            .then((res) => {
                localStorage.setItem(
                    APP_SETTINGS.STORAGE_KEYS.token,
                    res?.data?.access_token
                );

                setIsGlobalLoading(false);
            })

            .catch((err) => {
                const error_signin = err?.response?.data?.message;
                const toast_id = "NOTIFY_ERROR_SIGNIN";

                toast.error(error_signin, {
                    toastId: toast_id,
                });

                setIsGlobalLoading(false);
            });
    }

    async function retrieveUser() {
        auth.userAuthenticated()
            .then((res) => {
                setUser((prev) => ({
                    ...prev,
                    id: res?.data?.id,
                    name: res?.data?.name,
                    email: res?.data?.email
                }));

                setIsGlobalLoading(false);
            })
            .catch((error: any) => {
                const server_error = error?.response?.data?.message;
                const toast_id = "NOTIFY_SERVER_ERROR";

                toast.error(server_error, {
                    toastId: toast_id,
                });

                setIsGlobalLoading(false);
            });
    }

    function signOut() {
        localStorage.removeItem(APP_SETTINGS.STORAGE_KEYS.token);
        goToSignIn();
    }

    return (
        <AuthContext.Provider
            value={{
                signOut,
                signIn,
                user,
                token,
                signed: !!token,
                isGlobalLoading,
                setIsGlobalLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
