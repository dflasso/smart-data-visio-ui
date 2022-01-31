// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import { clientCoreBackendServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function langFindAll() {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.get(APIs.v1.medial_test.ophthalmological.classic_test.lang.find_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}


export function langSaveResult(request) {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.post(APIs.v1.medial_test.ophthalmological.classic_test.lang.save_result, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export const langCoreBackendServices = {
    langFindAll,
    langSaveResult
}