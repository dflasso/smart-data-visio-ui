export function isNumber(data) {
    if (typeof data === "number") {
        return true
    } else if (typeof data === "string") {
        let reg = /^\d+$/;
        return reg.test(data)
    }
    return false
}