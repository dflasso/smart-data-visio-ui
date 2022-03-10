import APIs from "../../constants/BookApisBackend";

import { clientCoreBackendServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";

export function uploadResultsDepthPerceptionCoreBackend({ num_document_patient = "", group_id = "", formData }) {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices({
            method: "put",
            url: APIs.v1.medial_test.ophthalmological.virtual_task
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