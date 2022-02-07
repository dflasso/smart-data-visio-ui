// Constants
import questions from "../../constants/QuestionaryQuestions";
// Providers
import { coreBackend } from "../../providers";

export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            res.status(200).json(questions)
            break;
        case 'POST':
            coreBackend.medical_test.ophthalmological.questionarie.save_answers({ request: req.body })
                .then(data => res.status(201).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        default:
            res.status(405).json({ message: 'Método HTTP desconocido' })
            break;
    }
}
