import { CSSProperties } from "@mui/styled-engine";
import { DefaultTheme } from "styled-components";

export interface IMenuItem extends CSSProperties {
    styled_theme: DefaultTheme;
    open: boolean;
}
