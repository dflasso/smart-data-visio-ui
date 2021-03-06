import { coreBackend } from "../../../providers";

export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            coreBackend.patients.save({ request: req.body })
                .then(data => res.status(200).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        case 'PUT':
            coreBackend.patients.update({ request: req.body })
                .then(data => res.status(200).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        case 'GET':
            coreBackend.patients.find_all()
                .then(data => res.status(200).json(data))
                .catch(error => res.status(error.status).json(error.data))

            break;
        default:
            res.status(405).json({ error: 'Method Not Allowed' })
            break;
    }

}