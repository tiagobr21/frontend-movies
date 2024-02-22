import { IMovie } from "../../models/interfaces/IMovie";

import api from "../config/api";

export default {
    createMovie: async (payload: IMovie) => {
        const url = "movie";

        const user = {
            title: payload.title,
            genre: payload.genre,
            releaseYear: parseInt(payload.releaseYear)
        }

        return await api.post(`${url}`, user);
    },

    getAllMovies: async (
        page: number,
        pageSize: number,
    ) => {
        return await api.get('/movie', {
            params: {
                page,
                pageSize
            }
        });
    },

    deleteMovie: async (id: number) => {
        return await api.delete(`/movie/${id}`);
    },

    updateMovie: async (id: number, payloadUserEdit: any) => {
        const url = `movie/${id}`;

        const userEdit = {
            title: payloadUserEdit.title,
            genre: payloadUserEdit.genre,
            releaseYear: parseInt(payloadUserEdit.releaseYear)
        }

        return await api.patch(`/${url}`, userEdit);
    },


    getOneMovie: async (id: number) => {
        return await api.get(`/movie/${id}`);
    },


};
