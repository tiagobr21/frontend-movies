import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import App from "../../pages/App";

import { APP_ROUTES } from "../configs";

export function ProtectedRoute() {
    const { signed } = useAuth();
    const location = useLocation();

    return !signed ? (
        <Navigate
            to={`/${APP_ROUTES.SIGNIN.path}`}
            state={{ from: location }}
            replace
        />
    ) : (
        <App />
    );
}
