// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import restClient from "../../middlewares/clientBackend";

import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function ishiharaFindAll() {
    return new Promise((resolve, reject) => {
        restClient.get(APIs.v1.medial_test.ophthalmological.classic_test.ishihara.find_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function ishiharaSaveResult(request) {
    return new Promise((resolve, reject) => {
        restClient.post(APIs.v1.medial_test.ophthalmological.classic_test.ishihara.save_result, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}