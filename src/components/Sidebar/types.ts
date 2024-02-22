import { DrawerProps } from "@mui/material";

export interface ISidebarProps {
    open: boolean;
    handleVisibility: () => void;
    menuItems: any;
}

export interface IDrawerProps extends DrawerProps {
    styled_theme: any;
}

export interface IDrawerHeaderProps {
    styled_theme: any;
}
