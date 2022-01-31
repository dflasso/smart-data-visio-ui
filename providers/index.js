//Core Backend Services
import { loginCoreBackend } from "./CoreBackend/AuthProvider";
import { ophthalmologicalTestsCoreServices } from "./CoreBackend/Ophthalmological";
import { langCoreBackendServices } from "./CoreBackend/lang";
import { ishiharaCoreBackendServices } from "./CoreBackend/ishihara";
import { titmusCoreBackendServices } from "./CoreBackend/titmus";
import { patientsCoreBackendServices } from "./CoreBackend/patients";

// OwnServices
import login from "./OwnServices/loginProvider";
import { findAllOphthalmologicalTests, createOphthalmologicalTests } from "./OwnServices/Ophthalmological";
import { savePatient, findAllPatients, findByNumDocument, updatePatient } from "./OwnServices/patients";
import { langFindAll, langSaveResult } from './OwnServices/lang'
import { ishiharaFindAll, ishiharaSaveResult } from './OwnServices/ishihara'
import {
    putTitmusHouseFlyResults, putTitmusCirclesResults, putTitmusAnimalsResults,
    findTitmusAllCircle, findTitmusAllAnimals
} from "./OwnServices/titmus";

export const ownServices = {
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

export const coreBackend = {
    login: loginCoreBackend,
    medical_test: {
        ophthalmological: {
            find_all: ophthalmologicalTestsCoreServices.findAllOphthalmologicalTests,
            create: ophthalmologicalTestsCoreServices.createOphthalmologicalTests,
            lang: {
                findAll: langCoreBackendServices.langFindAll,
                saveResult: langCoreBackendServices.langSaveResult
            },
            ishihara: {
                findAll: ishiharaCoreBackendServices.ishiharaFindAll,
                saveResult: ishiharaCoreBackendServices.ishiharaSaveResult
            },
            titmus: {
                results: {
                    updateHouseFly: titmusCoreBackendServices.putTitmusHouseFlyResults,
                    updateCircles: titmusCoreBackendServices.putTitmusCirclesResults,
                    updateAnimals: titmusCoreBackendServices.putTitmusAnimalsResults
                },
                circles: {
                    findAll: titmusCoreBackendServices.findTitmusAllCircle
                },
                animals: {
                    findAll: titmusCoreBackendServices.findTitmusAllAnimals
                }
            }
        }
    },
    patients: {
        save: patientsCoreBackendServices.savePatient,
        update: patientsCoreBackendServices.updatePatient,
        find_all: patientsCoreBackendServices.findAllPatients,
        find_by_num_document: patientsCoreBackendServices.findByNumDocument
    }
}

export const providers = {
    /**
     * Own Service build with API Route of Next.js
     */
    ownServices,
    coreBackend
}