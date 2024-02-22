import { styled as styledMui } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const LightTooltip = styledMui(({ className, ...props }: any) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ styled_theme, color, text_color }: any) => ({
    [`& .${tooltipClasses?.tooltip}`]: {
        backgroundColor: !color ? styled_theme?.color.primary.main : color,
        color: text_color ? text_color : styled_theme?.color.text.default.light,
        boxShadow: styled_theme?.shadow[1],
        fontSize: 11,
    },

    [`& .${tooltipClasses?.arrow}`]: {
        "&::before": {
            boxShadow: styled_theme?.shadow[1],
            color: !color ? styled_theme?.color.primary.main : color,
        },
    },
}));
