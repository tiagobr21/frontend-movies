import styled from "styled-components";

import { setSpacing } from "../../styles/theme/utils";

import { ISectionStyles } from "./types";

export const SectionStyled = styled.section<ISectionStyles>(
    ({ theme, styled_theme, contained }) => ({
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "100%",

        gap: setSpacing("small"),

        ...(contained === "true" && {
            background: styled_theme?.color.background.soft,
            borderRadius: styled_theme?.shape.radius.medium,
            padding: setSpacing("small"),
        }),
    })
);

export const Divider = styled.hr<any>(({ theme }) => ({
    flex: 1,
    height: 1.5,
    borderWidth: 0,
    backgroundColor: theme.color.neutral[7],
}));
