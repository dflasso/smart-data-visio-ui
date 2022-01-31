import axios from 'axios'
import { urlBase } from "../../constants/BookApisBackend";

const clientAppCore = axios.create({
    baseURL: urlBase
})

export default clientAppCore
