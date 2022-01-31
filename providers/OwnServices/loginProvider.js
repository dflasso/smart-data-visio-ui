// constants
import APIs from "../../constants/BookApisBackend";
// Middelware rest client 
import restClient from "../../middlewares/clientApp";

export default function login({ username = "", password = "" }) {
    return new Promise((resolve, reject) => {
        const request = {
            email: username,
            password
        }

        restClient.post(APIs.security.login.post, request)
            .then(
                response => {
                    resolve(response.data)
                }
            ).catch(
                error => {
                    try {
                        console.error(error.response.data)
                    } catch (exception) {
                        console.error(exception)
                    }

                    reject(error)
                }
            )
    })
}