export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            res.status(200).json({ name: 'John Doe' })
            break;
        default:
            res.status(200).json({ name: 'John Doe' })
            break;
    }

}