export const urlBase = process.env.BACKEND_SMART_DATA;

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
                    },
                    titmus: {
                        update_house_fly_results: '/v1/visual-test/classic/titmus/results/add_house_fly_results/',
                        update_circles_results: '/v1/visual-test/classic/titmus/results/add_circles_results/',
                        update_animals_results: '/v1/visual-test/classic/titmus/results/add_animals_results/',
                        circles: {
                            find_all: '/v1/visual-test/classic/titmus/cirlces/'
                        },
                        animals: {
                            find_all: '/v1/visual-test/classic/titmus/animals/'
                        }
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