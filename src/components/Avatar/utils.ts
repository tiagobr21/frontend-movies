export const stringAvatar = (name: string) => {
    if (name) {
        const compound_name = name?.split(" ");

        const first_part = name?.split(" ");
        const secondy_part = name?.split(" ");

        return compound_name.length > 1
            ? `${first_part[0][0]}${secondy_part[1][0]}`.toUpperCase()
            : `${first_part[0][0]}`.toUpperCase();
    }
};
