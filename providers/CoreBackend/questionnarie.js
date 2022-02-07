import APIs from "../../constants/BookApisBackend";

import { clientCoreBackendServices } from "../../middlewares";
import handleErrorsApiCalled from "../../util/HandleApiFailed";



/**
 * 
 * @param {*} request - 
 *  Ejemplo:
{
    "num_test_group": "11",
    "code_virtual_task": "vt001",
    "started_at" : "2022-01-22T05:55:01",
    "finished_at": "2022-01-22T05:55:01",
    "observations": "",
    "type":  "q001",
    "version" : "1.0.0",
    "description": "Pre cuestionario - Prueba Virual - xxx",
    "questions" : [
        {
            "id_question" : "1",
            "statement" : "Fatiga",
            "answerLabel" : "nada",
            "answerValue" : 1,
            "answerMinValue": 1,
            "answerMaxValue": 5
        }
    ]
} 
 * @returns 
 */
export function QuestionnarieSaveAnswers({ request = {} }) {
    return new Promise((resolve, reject) => {
        clientCoreBackendServices.post(APIs.v1.medial_test.ophthalmological.questionnarie.save_answers, request)
            .then(response => resolve(response.data))
            .catch(error => handleErrorsApiCalled(error, reject))
    })
}


export const CoreBackendQuestionnarieServices = {
    QuestionnarieSaveAnswers
}