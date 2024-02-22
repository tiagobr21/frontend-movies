import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider as ThemeMuiProvider } from "@mui/material";
import { ThemeProvider as ThemeStyledProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { MUI_DEFAULT_THEME } from "./styles/muiTheme";
import STYLED_THEME from "./styles/theme";

import { AuthProvider } from "./contexts/Auth";
import { Router } from "./routes";
import queryClient from "./services/QueryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeStyledProvider theme={STYLED_THEME}>
                    <ThemeMuiProvider theme={MUI_DEFAULT_THEME}>
                        <AuthProvider>
                            <GlobalStyles />
                            <Router />
                        </AuthProvider>
                    </ThemeMuiProvider>
                </ThemeStyledProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
);
