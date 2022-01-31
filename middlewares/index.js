import clientCoreBackend from "./backends/clientCoreBackend";
import clientApp from "./clientApp";

export const clientCoreBackendServices = clientCoreBackend

export const clientOwnServices = clientApp

export const clientsRest = {
    app: clientApp,
    backend: {
        core: clientCoreBackend
    }
}