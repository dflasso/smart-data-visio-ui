// constants
import APIs from "../../constants/BookApisApp";
// Middelware rest client 
import { clientOwnServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function savePatient({ request }) {
    return new Promise((resolve, reject) => {
        clientOwnServices.post(APIs.patients.create, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function updatePatient({ request }) {
    return new Promise((resolve, reject) => {
        clientOwnServices.put(APIs.patients.update({ id_patient: request.id }), request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findAllPatients() {
    return new Promise((resolve, reject) => {
        clientOwnServices.get(APIs.patients.get_all)
            .then(response => {
                resolve(response.data)
            }).catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findByNumDocument({ num_document = "" }) {
    return new Promise((resolve, reject) => {
        clientOwnServices.get(APIs.patients.find_by_num_document({ num_document }))
            .then(response => {
                resolve(response.data)
            }).catch(error => handleErrorsApiCalled(error, reject))
    })
}