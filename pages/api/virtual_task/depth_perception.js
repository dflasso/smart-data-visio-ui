import formidable from "formidable"
import { coreBackend } from "../../../providers/index";
import FormData from "form-data";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req, res) {

    switch (req.method) {
        case 'PUT':
            const form = new formidable.IncomingForm();
            const { num_document_patient, group_id } = req.query

            form.parse(req, async function (err, fields, files) {
                console.log(fields)
                console.log(files.file)

                //https://stackoverflow.com/questions/57788965/getting-error-uncaughtexception-source-on-is-not-a-function-when-using-reques
                // const formData = new FormData();
                // formData.append("file", files.file)

                // coreBackend.medical_test.ophthalmological
                //     .virtualTask.depthPerception.uploadResults({
                //         num_document_patient: num_document_patient,
                //         group_id: group_id,
                //         formData
                //     })
                //     .then(data => res.status(200).json(data))
                //     .catch(error => res.status(400).json(error))

                //
                res.status(200).json({ test: "1" })

            })
            break;

        default:
            res.status(405).json({ message: 'Método HTTP desconocido' })
            break;
    }
}