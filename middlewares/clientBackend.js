import axios from 'axios'
import { urlBase } from "../constants/BookApisBackend";

const clientBackendCore = axios.create({
    baseURL: urlBase
})

export default clientBackendCore
