// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import { clientCoreBackendServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function findAllOphthalmologicalTests() {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.get(APIs.v1.medial_test.ophthalmological.get_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}


export function createOphthalmologicalTests({ patient_id = "3", evaluator_id = "1" }) {
    const request = {
        patient_id,
        evaluator_id
    }
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.post(APIs.v1.medial_test.ophthalmological.create, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export const ophthalmologicalTestsCoreServices = {
    findAllOphthalmologicalTests,
    createOphthalmologicalTests
}