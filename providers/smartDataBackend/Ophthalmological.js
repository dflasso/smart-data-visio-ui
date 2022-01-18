// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import restClient from "../../middlewares/clientBackend";

export function findAllOphthalmologicalTests() {
    return new Promise((resolve, reject) => {
        restClient.get(APIs.v1.medial_test.ophthalmological.get_all).then(response => {
            resolve(response.data)
        }).catch(
            error => {
                try {
                    console.error(error.response.data)
                } catch (exception) {
                    console.error(exception)
                }

                reject(error)
            }
        )
    })
}


export function createOphthalmologicalTests({ patient_id = "3", evaluator_id = "1" }) {
    const request = {
        patient_id,
        evaluator_id
    }
    return new Promise((resolve, reject) => {
        restClient.post(APIs.v1.medial_test.ophthalmological.create, request)
            .then(response => {
                resolve(response.data)
            }).catch(
                error => {
                    try {
                        console.error(error.response.data)
                    } catch (exception) {
                        console.error(exception)
                    }

                    reject(error)
                }
            )
    })
}