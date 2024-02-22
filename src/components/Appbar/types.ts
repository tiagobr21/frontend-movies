import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
export interface IAppbarProps {
    open: boolean;
    handleVisibility: () => void;
}

export interface IAppBarStyled extends MuiAppBarProps {
    open?: boolean;
    styled_theme?: any;
}
