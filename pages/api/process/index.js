const processDefault = [
    {
        id: "1",
        name: "Aspirantes a pilotos de las FF. AA.",
        description: "Proceso de Selección a pilotos de las FF. AA.",
        imageUrl: "https://www.osmaviationacademy.com/hubfs/01.%20All%20photos/05.%20Blog%20-%20Images/09.%20Medical/Medical%20requirements%20for%20pilots.jpg",
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