// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import restClient from "../../middlewares/clientBackend";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function savePatient({ request }) {
    return new Promise((resolve, reject) => {
        restClient.post(APIs.v1.patients.save, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function updatePatient({ request }) {
    return new Promise((resolve, reject) => {
        restClient.put(APIs.v1.patients.update({ id_patient: request.id }), request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findAllPatients() {
    return new Promise((resolve, reject) => {
        restClient.get(APIs.v1.patients.save)
            .then(response => {
                resolve(response.data)
            }).catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findByNumDocument({ num_document = "" }) {
    return new Promise((resolve, reject) => {
        restClient.get(APIs.v1.patients.find_by_num_document({ num_document }))
            .then(response => {
                resolve(response.data)
            }).catch(error => handleErrorsApiCalled(error, reject))
    })
}