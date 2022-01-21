import login from "./smartDataBackend/loginProvider";
import { findAllOphthalmologicalTests, createOphthalmologicalTests } from "./smartDataBackend/Ophthalmological";
import { savePatient, findAllPatients } from "./smartDataBackend/patients";
import { langFindAll, langSaveResult } from './smartDataBackend/lang'
import { ishiharaFindAll } from './smartDataBackend/ishihara'

export const providers = {
    backend: {
        login,
        medical_test: {
            ophthalmological: {
                find_all: findAllOphthalmologicalTests,
                create: createOphthalmologicalTests,
                lang: {
                    findAll: langFindAll,
                    saveResult: langSaveResult
                },
                ishihara: {
                    findAll: ishiharaFindAll
                }
            }
        },
        patients: {
            save: savePatient,
            find_all: findAllPatients
        }
    }
}