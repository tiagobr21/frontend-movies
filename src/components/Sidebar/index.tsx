import {
    Airplay,
    ChevronLeft as ChevronLeftIcon
} from "react-feather";

import { Divider, IconButton } from "@mui/material";
import { useTheme as useThemeStyled } from "styled-components";

import { useTheme as useThemeMui } from "@mui/material/styles";
import { Drawer, DrawerHeader, Navigator, Stack } from "./styles";

import MenuItem from "./components/MenuItem";


import { ISidebarProps } from "./types";

export default function Sidebar({
    open,
    handleVisibility,
    menuItems,
}: ISidebarProps) {
    const styledTheme = useThemeStyled();
    const muiTheme = useThemeMui();

    return (
        <Drawer variant="permanent" open={open} styled_theme={styledTheme}>
            <DrawerHeader styled_theme={styledTheme}>
                <Airplay />

                <IconButton onClick={handleVisibility}>
                    <ChevronLeftIcon
                        color={styledTheme.color.primary.main}
                    />
                </IconButton>
            </DrawerHeader>

            <Divider />

            <Navigator>
                {menuItems?.map((option: any) => {
                    return (
                        <Stack key={option.id}>
                            <MenuItem
                                items={option.items}
                                open={open}
                                styled_theme={styledTheme}
                            />

                            <Divider />
                        </Stack>
                    );
                })}
            </Navigator>
        </Drawer>
    );
}
