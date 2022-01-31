import { coreBackend } from "../../../providers";

export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const request = req.body
            coreBackend.medical_test.ophthalmological.create({ patient_id: request.patient_id, evaluator_id: request.evaluator_id })
                .then(data => res.status(200).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        case 'GET':
            coreBackend.medical_test.ophthalmological.find_all()
                .then(data => res.status(200).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        default:
            res.status(405).json({ error: 'Method Not Allowed' })
            break;
    }

}