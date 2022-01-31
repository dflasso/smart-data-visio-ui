// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import { clientsRest } from "../../middlewares";

import handleErrorsApiCalled from "../../util/HandleApiFailed";

const clientCoreBackend = clientsRest.backend.core

export function loginCoreBackend({ username = "", password = "" }) {
    return new Promise((resolve, reject) => {
        const request = {
            email: username,
            password
        }

        clientCoreBackend.post(APIs.security.login.post, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}