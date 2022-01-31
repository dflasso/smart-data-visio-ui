// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import { clientCoreBackendServices } from "../../middlewares";

import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function ishiharaFindAll() {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.get(APIs.v1.medial_test.ophthalmological.classic_test.ishihara.find_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function ishiharaSaveResult(request) {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.post(APIs.v1.medial_test.ophthalmological.classic_test.ishihara.save_result, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}


export const ishiharaCoreBackendServices = {
    ishiharaFindAll,
    ishiharaSaveResult
}