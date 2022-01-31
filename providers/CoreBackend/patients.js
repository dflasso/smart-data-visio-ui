// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import { clientCoreBackendServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function savePatient({ request }) {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.post(APIs.v1.patients.save, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function updatePatient({ request }) {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.put(APIs.v1.patients.update({ id_patient: request.id }), request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findAllPatients() {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.get(APIs.v1.patients.save)
            .then(response => {
                resolve(response.data)
            }).catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findByNumDocument({ num_document = "" }) {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.get(APIs.v1.patients.find_by_num_document({ num_document }))
            .then(response => {
                resolve(response.data)
            }).catch(error => handleErrorsApiCalled(error, reject))
    })
}

export const patientsCoreBackendServices = {
    savePatient,
    updatePatient,
    findAllPatients,
    findByNumDocument
}