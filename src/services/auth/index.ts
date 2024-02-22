import axios from "axios";

import { IPassword, IRecoverPassword, IUserSignIn } from "./types";

import api from "../config/api";

const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default {
    userSignIn: async (payload: IUserSignIn) => {
        return await axios.post(`${APP_BASE_URL}/login`, payload, {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
        });
    },

    userAuthenticated: async () => {
        return await api.get("/me");
    },

    recoverPassword: async (payload: IRecoverPassword) => {
        return await axios.post(
            `${APP_BASE_URL}/auth/password/recovery`,
            payload
        );
    },

    changePassword: async (payload: IPassword) => {
        return await api.post(`${APP_BASE_URL}/auth/password/change`, payload);
    },
};
