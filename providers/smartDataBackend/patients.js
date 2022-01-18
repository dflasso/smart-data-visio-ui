// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import restClient from "../../middlewares/clientBackend";

export function savePatient({ request }) {
    return new Promise((resolve, reject) => {
        restClient.post(APIs.v1.patients.save, request)
            .then(response => {
                resolve(response.data)
            }).catch(error => {
                try {
                    console.error(error.response.data)
                } catch (exception) {
                    console.error(exception)
                }

                reject(error)
            })
    })
}