const processDetail = {
    id: "1",
    name: "Visio Stereo Diagnostic",
    description: "Pruebas visuales",
    imageUrl: "https://www.osmaviationacademy.com/hubfs/01.%20All%20photos/05.%20Blog%20-%20Images/09.%20Medical/Medical%20requirements%20for%20pilots.jpg",
    steps: [
        {
            id: "1",
            order: "1",
            name: "Selección del aspirante",
            description: "Consulte o Registre un nuevo paciente.",
            url: "/patient/admin"
        },
        {
            id: "2",
            order: "2",
            name: "Selecione de la Prueba",
            description: "Selecione de la Prueba.",
            url: "/visual-tests/home-traditionals"
        },
        {
            id: "3",
            order: "3",
            name: "Cuestionario Previo",
            description: "Cuestionario destinado a determinar si el paciente puede continuar con el proceso.",
            url: "/questionnaire/pre"
        },
        {
            id: "5",
            order: "5",
            name: "Pruebas Virtuales",
            description: "Ingrese los resultado de las pruebas virtuales.",
            url: "/visual-tests/virtuals"
        },
        {
            id: "6",
            order: "6",
            name: "Cuestionario Posterior",
            description: "Cuestionario enfocado a recolectar la experiencia del paciente posterior al proceso.",
            url: "/questionnaire/post"
        },
        {
            id: "7",
            order: "7",
            name: "Evaluación",
            description: "Formulario de preguntas enfocadas a determinar y corelacionar los resultados.",
            url: "/evaluations/evaluation-test"
        },
        {
            id: "8",
            order: "8",
            name: "Reportes",
            description: "Recomendaciones sobre los resultados del paciente.",
            url: ""
        }
    ]
}

export default function handler(req, res) {

    switch (req.method) {
        case 'GET':
            res.status(200).json(processDetail)
            break;

        default:
            res.status(405).json({ message: 'Método HTTP desconocido' })
            break;
    }
}