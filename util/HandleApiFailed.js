/**
 * Manejo de Errores al llamar las APIs
 * @param {} error - objeto recuperado del error al llamar a una API
 * @param {} callbackResolve - función que recibe el objeto con los datos del error de una forma estandar
 * @author dflasso
 * @returns apierror - objeto estandar
 */
const handleErrorsApiCalled = (error, callbackResolve) => {
    try {
        const apierror = {}
        if (error.response) {
            apierror.status = error.response.status || 500
            apierror.data = error.response.data
            console.error({ ...error.response })
        } else {
            apierror.status = 500
            apierror.data = {
                message_spanish: "Existen problemas en la red. Contáctese con el administrador del Sistema."
            }
        }

        callbackResolve(apierror)
    } catch (error) {
        const apierror = {
            status: 500,
            data: {
                message_spanish: "Existen problemas internos. Contáctese con el administrador del Sistema."
            }
        }
        callbackResolve(apierror)
        console.error(error)
    }
}

export default handleErrorsApiCalled