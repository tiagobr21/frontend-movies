import { IUser } from "../../models/interfaces/IUser";

import api from "../config/api";

export default {
    createUser: async (payload: IUser) => {
        const url = "user";
        return await api.post(`${url}`, payload);
    },

    getAllUsers: async (
        page: number,
        pageSize: number,
    ) => {
        return await api.get('/user', {
            params: {
                page,
                pageSize
            }
        });
    },

    deleteUser: async (id: number) => {
        return await api.delete(`/user/${id}`);
    },

    updateUser: async (id: number, payloadUserEdit: any) => {
        const url = `user/${id}`;

        return await api.patch(`/${url}`, payloadUserEdit);
    },


    getOneUser: async (id: number) => {
        return await api.get(`/user/${id}`);
    },


};
