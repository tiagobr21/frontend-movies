import { IProfile } from "../../models/interfaces/IProfile";

import api from "../config/api";

const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default {
    getAllProfiles: async () => {
        const url = "profile/all";
        return await api.get<IProfile[]>(`${APP_BASE_URL}/${url}`);
    },
};
