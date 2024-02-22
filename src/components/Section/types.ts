import { CSSProperties, DefaultTheme } from "styled-components";

export interface ISectionProps {
    title?: string;
    children?: React.ReactNode;
    hasDivider?: boolean;
    contained?: boolean;
}

export interface ISectionStyles extends CSSProperties {
    contained?: string;
    styled_theme?: DefaultTheme;
}
