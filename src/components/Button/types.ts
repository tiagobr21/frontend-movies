import { FormEvent, MouseEvent } from "react";
export interface IButtonProps {
    iconPosition?: string;
    icon?: any;
    flex?: number;
    type?: string;
    variant?: string;
    onClick?:
        | ((e: MouseEvent<HTMLElement>) => void)
        | ((e: FormEvent<HTMLFormElement>) => void);
    isFetching?: boolean;
    value: string;
    width?: string | number;
    height?: string | number;
    justify?: string;
    gap?: string | number;
    uppercase?: string;
    disabled?: boolean;
    iconColor?: string;
    isOpen?: boolean;
}
