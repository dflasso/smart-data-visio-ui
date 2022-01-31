// constants
import APIs from "../../constants/BookApisApp";
// Middelware rest client 
import { clientOwnServices } from "../../middlewares";

import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function ishiharaFindAll() {
    return new Promise((resolve, reject) => {
        clientOwnServices.get(APIs.medial_test.ophthalmological.classic_test.ishihara.find_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function ishiharaSaveResult(request) {
    return new Promise((resolve, reject) => {
        clientOwnServices.post(APIs.medial_test.ophthalmological.classic_test.ishihara.save_result, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}