import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { StyledToast } from "../styles/toastStyles";

import PageNotFound from "../pages/App/PageNotFound";


import SignIn from "../pages/SignIn";
import UsersList from "../pages/Users";

import UserRegister from "../pages/Users/UserRegister";

import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

import { APP_SETTINGS } from "../configs";
import { APP_ROUTES } from "./configs";
import App from "../pages/App";
import MoviesList from "../pages/Movies";
import MovieRegister from "../pages/Movies/MovieRegister";

export function Router() {
    const inRoutes = "in_routes";
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={`/${APP_ROUTES.SIGNIN.path}`} />}
                />

                <Route path={APP_ROUTES.APP_ROOT.path} element={<App />} />

                <Route
                    path={APP_ROUTES.SIGNIN.path}
                    element={
                        <PublicRoute>
                            <SignIn />
                        </PublicRoute>
                    }
                />

                <Route element={<ProtectedRoute />}>
                    <Route path={APP_ROUTES.USERS.path} element={<Outlet />}>
                        <Route 
                            path=""
                            element={
                                <Navigate 
                                    to={`${APP_ROUTES.USERS.LIST.path}`}
                                />
                            }
                        />

                        <Route 
                            path={APP_ROUTES.USERS.LIST.path}
                            element={
                                <UsersList />
                            }
                        />

                        <Route 
                            path={APP_ROUTES.USERS.REGISTER.path}
                            element={
                                <UserRegister />
                            }
                        />

                        <Route 
                            path={APP_ROUTES.USERS.EDIT.path}
                            element={
                                <UserRegister />
                            }
                        />
                    </Route>


                    <Route path={APP_ROUTES.MOVIE.path} element={<Outlet />}>
                        <Route 
                            path=""
                            element={
                                <Navigate 
                                    to={`${APP_ROUTES.MOVIE.LIST.path}`}
                                />
                            }
                        />

                        <Route 
                            path={APP_ROUTES.MOVIE.LIST.path}
                            element={
                                <MoviesList />
                            }
                        />

                        <Route 
                            path={APP_ROUTES.MOVIE.REGISTER.path}
                            element={
                                <MovieRegister  />
                            }
                        />

                        <Route 
                            path={APP_ROUTES.MOVIE.EDIT.path}
                            element={
                                <MovieRegister />
                            }
                        />
                    </Route>
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <StyledToast
                position="top-center"
                autoClose={APP_SETTINGS.TOAST.timeout}
                hideProgressBar={false}
                newestOnTop={true}
                rtl={false}
                icon={true}
                closeOnClick
                closeButton={true}
                pauseOnFocusLoss
                pauseOnHover
            />
        </>
    );
}
