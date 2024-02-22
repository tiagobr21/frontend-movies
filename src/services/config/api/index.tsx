import { toast } from "react-toastify";

import axios from "axios";

import { APP_SETTINGS } from "../../../configs";
import { useAuth } from "../../../hooks/useAuth";

const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: `${APP_BASE_URL}`,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});

api.interceptors.request.use(async (config: any) => {
    try {
        const token = localStorage.getItem(APP_SETTINGS.STORAGE_KEYS.token);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;

            return config;
        }
    } catch (error) {
        console.log("AXIOS INTERCEPTORS: ", error);
    }
});

api.interceptors.response.use(
    (res: any) => res,
    async (error: any) => {
        const { signOut } = useAuth();

        const requestStatus = error?.response?.status;
        const serverError = error?.response?.data?.message;

        switch (requestStatus) {
            case 401:
            case 403: {
                const message = serverError
                    ? serverError
                    : "Sua sessão expirou, entre novamente!";

                const toastId_401 = "NOTIFY_SERVER_ERROR_401";

                const logout_delay = 5000;

                toast.warn(message, {
                    toastId: toastId_401,

                    ...(error?.response?.data?.auth === false && {
                        autoClose: logout_delay,
                    }),
                });

                setTimeout(() => {
                    signOut();
                    window.location.reload();
                }, logout_delay);

                break;
            }

            case 500: {
                const message_500 = (
                    <p>
                        <strong>ERRO {requestStatus}</strong>: Possível problema
                        nos serviços, aguarde as correções!
                    </p>
                );

                const toastId_500 = "NOTIFY_SERVER_ERROR_500";

                toast.warn(message_500, {
                    toastId: toastId_500,
                    autoClose: 5000,
                });

                break;
            }

            default: {
                return Promise.reject(error);
            }
        }
    }
);

export default api;
