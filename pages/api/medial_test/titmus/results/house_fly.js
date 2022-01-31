import { coreBackend } from "../../../../../providers";

export default function handler(req, res) {
    switch (req.method) {
        case 'PUT':
            const request = req.body
            coreBackend.medical_test.ophthalmological.titmus.results.updateHouseFly(request)
                .then(data => res.status(200).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        default:
            res.status(405).json({ error: 'Method Not Allowed' })
            break;
    }

}