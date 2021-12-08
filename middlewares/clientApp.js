import axios from 'axios'

const clientApp = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST
})

export default clientApp
