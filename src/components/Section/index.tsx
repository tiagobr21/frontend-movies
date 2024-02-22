import { useTheme } from "styled-components";

import { Box as BodySection, Box as HeaderSection, SectionTitle } from "..";

import { Divider, SectionStyled } from "./styles";

import { ISectionProps } from "./types";

export default function Section({
    title,
    children,
    hasDivider = true,
    contained,
}: ISectionProps) {
    const styledTheme = useTheme();

    return (
        <SectionStyled
            contained={contained ? "true" : "false"}
            styled_theme={styledTheme}
        >
            <HeaderSection direction="row" align="center" gap="10px">
                <SectionTitle>{title}</SectionTitle>

                {hasDivider && <Divider />}
            </HeaderSection>

            <BodySection direction="row" gap="small">
                {children}
            </BodySection>
        </SectionStyled>
    );
}
