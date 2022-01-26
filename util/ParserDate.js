export function parseDateSimple(date) {
    try {
        let dateSimple = new Date(date)
        return dateSimple.toLocaleString('en-GB', { timeZone: 'UTC' })
    } catch (error) {
        console.error({ error })
        return ""
    }

}

export function buildCurrentDateSimpleFormat() {
    const now = new Date()
    return `${now.getFullYear()}-${Number(now.getMonth()) + 1}-${now.getDate()}T${now.getHours()}:${now.getMinutes()}`
}