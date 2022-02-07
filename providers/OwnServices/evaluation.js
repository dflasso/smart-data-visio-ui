import APIs from "../../constants/BookApisApp";

import { clientOwnServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function EvaluationUsabilityFindQuestions() {
    return new Promise((resolve, reject) => {
        clientOwnServices.get(APIs.medial_test.ophthalmological.evaluation_usability)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}