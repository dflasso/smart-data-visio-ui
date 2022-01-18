import clientApp from "../middlewares/clientApp";
import apis from "../constants/BookApisApp";
import handleApiFailed from "../util/HandleApiFailed";
/**
 * Función que retorna todos los procesos registrados
 * @returns promesa con los datos de todos los procesos
 */
export const getAllProcess = () => new Promise((resolve, reject) => {
    clientApp.get(apis.process.get_all).then(response => {
        resolve(response.data)
    }).catch(error => handleApiFailed(error, resolve, reject))
});

/**
 * Función que retorna los pasos que deben realizar en un determinado proceso
 * @param {*} id  - identificador del proceso a consultar
 * @param {*} onError - función que maneja el error
 * @returns 
 */
export const getStepsProcess = async (id = "0", onError) => {
    try {
        const response = await clientApp.get(apis.process.get_steps_process(id))
        return response.data
    } catch (error) {
        handleApiFailed(error, onError)
    }
}