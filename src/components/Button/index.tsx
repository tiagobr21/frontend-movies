import { ButtonStyled } from "./styles";

import { IButtonProps } from "./types";

export default function Button({
    iconPosition,
    icon: Icon,
    flex,
    variant,
    onClick,
    isFetching,
    value,
    width,
    justify,
    height,
    gap,
    uppercase,
    disabled,
    iconColor,
    type,
    isOpen,
    ...rest
}: IButtonProps) {
    return (
        <ButtonStyled
            loading={isFetching}
            type={type}
            onClick={onClick}
            width={width}
            is_open={isOpen?.toString()}
            gap={gap}
            height={height}
            justify={justify}
            flex={flex}
            uppercase={uppercase}
            variant={variant ? variant : "contained"}
            endIcon={
                iconPosition !== "left" && Icon ? (
                    <Icon color={iconColor} size="20px" />
                ) : null
            }
            startIcon={
                iconPosition === "left" && Icon ? (
                    <Icon color={iconColor} />
                ) : null
            }
            disabled={disabled}
            {...rest}
        >
            {value}
        </ButtonStyled>
    );
}
