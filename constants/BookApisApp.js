export const urlBase = process.env.NEXT_PUBLIC_HOST;

export default {
    patients: {
        create: "/patients",
        update: ({ id_patient = "" }) => `/patients?id_patient=${id_patient}`,
        find_by_num_document: ({ num_document = "" }) => `/patients/find_by_num_document?num_document=${num_document}`,
        get_all: '/patients'
    },
    process: {
        get_all: "/process",
        get_steps_process: (id) => `/process/${id}`
    },
    medial_test: {
        ophthalmological: {
            get_all: '/medial_test/ophthalmological',
            create: '/medial_test/ophthalmological',
            classic_test: {
                lang: {
                    find_all: '/medial_test/lang',
                    save_result: '/medial_test/lang'
                },
                ishihara: {
                    find_all: '/medial_test/ishihara',
                    save_result: '/medial_test/ishihara'
                },
                titmus: {
                    update_house_fly_results: '/medial_test/titmus/results/house_fly',
                    update_circles_results: '/medial_test/titmus/results/circles',
                    update_animals_results: '/medial_test/titmus/results/animals',
                    circles: {
                        find_all: '/medial_test/titmus/circles'
                    },
                    animals: {
                        find_all: '/medial_test/titmus/animals'
                    }
                }
            },
            virtual_task: {
                depth_perception: {
                    upload_results: ({ num_document_patient = "", group_id = "0" }) => `virtual_task/depth_perception?num_document_patient=${num_document_patient}&group_id=${group_id}`
                }
            },
            questionnaries: `/questionnaire`,
            evaluation_usability: '/evaluations',
            save_questionnarie_answer: '/questionnaire'
        }
    }
}