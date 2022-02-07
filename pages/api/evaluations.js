import questions from "../../constants/EvaluationsQuestions";

export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            res.status(200).json(questions)
            break;
        default:
            res.status(405).json({ message: 'Método HTTP desconocido' })
            break;
    }
}
