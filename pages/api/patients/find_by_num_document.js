import { coreBackend } from "../../../providers";

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            const { num_document } = req.query
            coreBackend.patients.find_by_num_document({ num_document: num_document })
                .then(data => res.status(200).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        default:
            res.status(405).json({ error: 'Method Not Allowed' })
            break;
    }

}