import { useNavigate } from "react-router-dom";

import { APP_ROUTES } from "../../routes/configs";

export function useRedirect() {
    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate(`/${APP_ROUTES.SIGNIN.path}`);
    };

    const goToListUser = () => {
        navigate(`/${APP_ROUTES.USERS.path}`);
    };

    const goToEditUser = (id: number) => {
        navigate(
            `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.EDIT.path.replace(
                ":id",
                id.toString()
            )}`
        );
    };

    const goToListMovie = () => {
        navigate(`/${APP_ROUTES.MOVIE.path}`);
    }

    const goToEditMovie = (id: number) => {
        navigate(
            `/${APP_ROUTES.MOVIE.path}/${APP_ROUTES.MOVIE.EDIT.path.replace(
                ":id",
                id.toString()
            )}`
        );
    };

    return {
        goToSignIn,
        goToEditUser,
        goToListUser,
        goToListMovie,
        goToEditMovie
    };
}
