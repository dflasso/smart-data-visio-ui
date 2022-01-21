// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import restClient from "../../middlewares/clientBackend";

export function langFindAll() {
    return new Promise((resolve, reject) => {
        restClient.get(APIs.v1.medial_test.ophthalmological.classic_test.lang.find_all)
            .then(response => {
                resolve(response.data)
            }).catch(error => {
                try {
                    console.error(error.response.data)
                } catch (exception) {
                    console.error(exception)
                }

                reject(error)
            })
    })
}


export function langSaveResult(request) {
    return new Promise((resolve, reject) => {
        restClient.post(APIs.v1.medial_test.ophthalmological.classic_test.lang.save_result, request)
            .then(response => {
                resolve(response.data)
            }).catch(error => {
                try {
                    console.error(error.response.data)
                } catch (exception) {
                    console.error(exception)
                }

                reject(error)
            })
    })
}