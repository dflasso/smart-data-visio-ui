import login from "./smartDataBackend/loginProvider";
import { findAllOphthalmologicalTests, createOphthalmologicalTests } from "./smartDataBackend/Ophthalmological";
import { savePatient, findAllPatients, findByNumDocument, updatePatient } from "./smartDataBackend/patients";
import { langFindAll, langSaveResult } from './smartDataBackend/lang'
import { ishiharaFindAll, ishiharaSaveResult } from './smartDataBackend/ishihara'
import {
    putTitmusHouseFlyResults, putTitmusCirclesResults, putTitmusAnimalsResults,
    findTitmusAllCircle, findTitmusAllAnimals
} from "./smartDataBackend/titmus";

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
                    findAll: ishiharaFindAll,
                    saveResult: ishiharaSaveResult
                },
                titmus: {
                    results: {
                        updateHouseFly: putTitmusHouseFlyResults,
                        updateCircles: putTitmusCirclesResults,
                        updateAnimals: putTitmusAnimalsResults
                    },
                    circles: {
                        findAll: findTitmusAllCircle
                    },
                    animals: {
                        findAll: findTitmusAllAnimals
                    }
                }
            }
        },
        patients: {
            save: savePatient,
            update: updatePatient,
            find_all: findAllPatients,
            find_by_num_document: findByNumDocument
        }
    }
}