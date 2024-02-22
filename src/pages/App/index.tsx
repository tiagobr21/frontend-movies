import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Appbar from "../../components/Appbar";
import { MENU_ITEMS } from "./mock";
import Sidebar from "../../components/Sidebar";
import { Content } from "./styles";

export default function App() {
    const styledTheme = useTheme();
    const { user } = useAuth();

    const key_status = "SIDE_BAR_STATUS";
    const storage_status = localStorage.getItem(key_status) === "true";

    const [open, setOpen] = useState(storage_status);

    useEffect(() => {
        localStorage.setItem(key_status, open.toString());
    }, [open]);

    const handleVisibility = () => {
        setOpen((prev) => !prev);
    };

    const location = useLocation();
    const url = location.pathname;

    return (
        <div className="App">
            {user && (
                <>
                    <Appbar open={open} handleVisibility={handleVisibility} />

                    <Sidebar 
                        open={open}
                        handleVisibility={handleVisibility}
                        menuItems={MENU_ITEMS}
                    />
                </>
            )}

            <Content
                open={open}
                styled_theme={styledTheme}
                // style={{
                //     margin: `${url === "/users"? "0" : ""}`,
                // }}
            >
                <Outlet />
            </Content>
        </div>
    );
}