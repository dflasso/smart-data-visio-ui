/**
 * Manejo de Errores al llamar las APIs
 * @param {} error - objeto recuperado del error al llamar a una API
 * @param {} callbackResolve - función que recibe el objeto con los datos del error de una forma estandar
 * @param {} callbackReject - función lanzada en caso de error
 * @author dflasso
 * @returns apierror - objeto estandar
 */
const handleErrorsApiCalled = (error, callbackResolve, callbackReject) => {
    try {
        const apierror = {}
        if (error.response) {
            apierror.status = error.response.status || 500
            console.log({ ...error.response })
        } else {
            apierror.status = 500
            apierror.message = "Existen problemas en la red. Contáctese con el administrador del Sistema."
        }

        callbackResolve(apierror)
    } catch (error) {
        if (typeof callbackReject === "function") {
            callbackReject(error)
        } else {
            console.error(error)
        }
    }
}

export default handleErrorsApiCalled