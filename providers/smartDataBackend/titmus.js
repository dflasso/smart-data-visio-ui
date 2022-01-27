// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import restClient from "../../middlewares/clientBackend";

import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function putTitmusHouseFlyResults(request) {
    return new Promise((resolve, reject) => {
        restClient.put(APIs.v1.medial_test.ophthalmological.classic_test.titmus.update_house_fly_results, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function putTitmusCirclesResults(request) {
    return new Promise((resolve, reject) => {
        restClient.put(APIs.v1.medial_test.ophthalmological.classic_test.titmus.update_circles_results, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function putTitmusAnimalsResults(request) {
    return new Promise((resolve, reject) => {
        restClient.put(APIs.v1.medial_test.ophthalmological.classic_test.titmus.update_animals_results, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findTitmusAllCircle() {
    return new Promise((resolve, reject) => {
        restClient.get(APIs.v1.medial_test.ophthalmological.classic_test.titmus.circles.find_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}

export function findTitmusAllAnimals() {
    return new Promise((resolve, reject) => {
        restClient.get(APIs.v1.medial_test.ophthalmological.classic_test.titmus.animals.find_all)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}