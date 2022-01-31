export default function handler(req, res) {

    switch (req.method) {
        case 'GET':
            res.status(200).json(processDefault)
            break;

        default:
            res.status(405).json({ message: 'Método HTTP desconocido' })
            break;
    }
}