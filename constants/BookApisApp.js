export const urlBase = process.env.NEXT_PUBLIC_HOST;

export default {
    patients: {
        post_register: "/patients"
    },
    process: {
        get_all: "/process",
        get_steps_process: (id) => `/process/${id}`
    }
}