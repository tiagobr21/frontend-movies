/*
    Os elementos desativados não disparam eventos. 
    Como Tooltips precisa ouvir os eventos do elemento filho, o Tooltips não pode receber o children desativado.
    Problema: Warning no DevTools. 
*/

import { useTheme } from "styled-components";

import { LightTooltip } from "./styles";

import { Box } from "..";

function Tooltips({
    isActiveHover,
    text_color,
    placement,
    children,
    noArrow,
    color,
    open,
    title,
    icon: Icon,
    ...rest
}: any) {
    const styledTheme = useTheme();

    if (!children.props?.disabled) {
        return (
            <LightTooltip
                open={open}
                color={color}
                text_color={text_color}
                disableHoverListener={isActiveHover}
                placement={placement ? placement : "top"}
                arrow={!noArrow}
                styled_theme={styledTheme}
                disableInteractive
                title={
                    Icon ? (
                        <Box
                            direction="row"
                            justify="center"
                            align="center"
                            gap="4px"
                        >
                            <Icon weight="fill" />
                            {title}
                        </Box>
                    ) : (
                        title
                    )
                }
                {...rest}
            >
                {children}
            </LightTooltip>
        );
    } else {
        return <div>{children}</div>;
    }
}

export default Tooltips;
