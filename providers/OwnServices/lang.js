// constants
import APIs from "../../constants/BookApisApp";
// Middelware rest client 
import { clientOwnServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function langFindAll() {
    return new Promise((resolve, reject) => {
        clientOwnServices.get(APIs.medial_test.ophthalmological.classic_test.lang.find_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}


export function langSaveResult(request) {
    return new Promise((resolve, reject) => {
        clientOwnServices.post(APIs.medial_test.ophthalmological.classic_test.lang.save_result, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}