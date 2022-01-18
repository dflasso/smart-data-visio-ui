const processDefault = [
    {
        id: "1",
        name: "Pruebas oftalmológicas",
        description: "Pruebas visuales",
        imageUrl: "img/Pruebas_Oftalmologicas.png",
        url: "/process/eval-pilots"
    }
]

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