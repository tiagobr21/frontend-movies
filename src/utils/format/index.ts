export const formatNumber = (number: string, maxCaracteres = 0) => {
    const value = number?.replace(/\D/g, "");

    if (maxCaracteres > 0) {
        return value.substring(0, maxCaracteres);
    }

    return value;
};