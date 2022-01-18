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
                        find_all: '/v1/visual-test/classic/lang/'
                    },
                    ishihara: {
                        find_all: '/v1/visual-test/classic/ishihara/'
                    }
                }
            }
        },
        patients: {
            save: '/v1/patients/'
        }
    }

}