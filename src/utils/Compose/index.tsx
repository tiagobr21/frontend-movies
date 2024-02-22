import { Dispatch, SetStateAction } from "react";

export const simplifyName = (
    value: string,
    setValue: Dispatch<SetStateAction<string>>
) => {
    const value_parts = value?.split(" ");

    const name = `${value_parts[0]} ${value_parts[value_parts.length - 1]}`;

    const value_split = name?.split(" ");

    const is_same_name = value_split[0] === value_split[1];

    is_same_name ? setValue(value_split[0]) : setValue(name);
};





