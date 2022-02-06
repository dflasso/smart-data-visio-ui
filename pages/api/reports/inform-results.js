import ReactPDF from '@react-pdf/renderer';
import { promisify } from "util";
import stream from 'stream';
import DocInformResults from '../../../modules/reports/DocInformResults';



const pipeline = promisify(stream.pipeline);



export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=informe_resultados.pdf');
            const stream = await ReactPDF.renderToStream(<DocInformResults />);
            await pipeline(stream, res);
            break;

        default:
            res.status(405).json({ message: 'Método HTTP desconocido' })
            break;
    }
}

