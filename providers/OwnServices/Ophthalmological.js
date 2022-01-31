// constants
import APIs from "../../constants/BookApisApp";
// Middelware rest client 
import { clientOwnServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function findAllOphthalmologicalTests() {
    return new Promise((resolve, reject) => {
        clientOwnServices.get(APIs.medial_test.ophthalmological.get_all)
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
        clientOwnServices.post(APIs.medial_test.ophthalmological.create, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}