export function parseDateSimple(date) {
    try {
        let dateSimple = new Date(date)
        return dateSimple.toLocaleString('en-GB', { timeZone: 'UTC' })
    } catch (error) {
        console.error({ error })
        return ""
    }

}