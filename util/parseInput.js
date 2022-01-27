
/**
 * @author Dany_Lasso
 * @param {*} value string
 * @returns value as number
 */
export const stringToNumber = (value) => {
    if (typeof value === "string") {
        value = Number(value.replace(/[^0-9.]/gi, ""));
    }
    return value;
};



export const parseAnyToNumber = (num) => {
    if (
        typeof num !== "number" &&
        typeof num !== "bigint" &&
        typeof num !== "string"
    ) {
        return 0;
    } else {
        return stringToNumber(num);
    }
};
