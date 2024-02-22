import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { IPublicRoute } from "./types";

import { APP_ROUTES } from "../configs";

export function PublicRoute({ children }: IPublicRoute) {
    const { signed, user } = useAuth();

    const location = useLocation();

    return !signed ? (
        children
    ) : (
        <Navigate
            to={`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`}
            state={{ from: location }}
        />
    );
}
