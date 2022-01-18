import React from 'react'
import TableAllProcessPilotsRow from './TableAllProcessPilotsRow'

const processDefault = [{
    numTicket: "1",
    patientNumDoc: "1700000000",
    patientName: "Alberto Freddy",
    patientLastName: "Alberto Freddy",
    tiemestapStart: "23-12-2021, 7H30",
    tiemestapEnd: "23-12-2021, 7H40",
    stateProcess: "Terminado",
}]

export default function TableAllProcessPilotsBody({ rows = processDefault }) {
    return rows.map(row => <TableAllProcessPilotsRow row={row} />)
}
