export const urlBase = process.env.NEXT_PUBLIC_BACKEND_SMART_DATA;

export default {
    security: {
        login: {
            post: '/v1/security/login'
        }
    },
    v1: {
        medial_test: {
            ophthalmological: {
                get_all: '/v1/tests/ophthalmological/',
                create: '/v1/tests/ophthalmological/',
                classic_test: {
                    lang: {
                        find_all: '/v1/visual-test/classic/lang/',
                        save_result: '/v1/visual-test/classic/lang/results/'
                    },
                    ishihara: {
                        find_all: '/v1/visual-test/classic/ishihara/',
                        save_result: '/v1/visual-test/classic/ishihara/results/'
                    }
                }
            }
        },
        patients: {
            save: '/v1/patients/',
            update: ({ id_patient = "" }) => `/v1/patients/${id_patient}/`,
            find_by_num_document: ({ num_document = "" }) => `/v1/patients/${num_document}/find_by_num_document`,
            get_all: '/v1/patients/'
        }
    }

}