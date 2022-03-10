import APIs from "../../constants/BookApisApp";

import { clientOwnServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function uploadResultsDepthPerception({ num_document_patient = "", group_id = "", formData }) {
    return new Promise((resolve, reject) => {
        clientOwnServices({
            method: "put",
            url: APIs.medial_test.ophthalmological.virtual_task
                .depth_perception.upload_results({
                    num_document_patient,
                    group_id
                }),
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}