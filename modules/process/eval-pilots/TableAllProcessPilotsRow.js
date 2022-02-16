// React
import React from 'react'
// Material UI
import { PictureAsPdf } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
// Styles
import styles from "../../../styles/EvalPilots.module.scss"
import BtnEditPatient from '../../patient/BtnEditPatient'
import ButtonStartProcess from '../register_ophthalmological_tests/ButtonStartProcess'
import { useRouter } from 'next/router'

const processDefault = {
    numTicket: "1",
    patientNumDoc: "1700000000",
    patientName: "Alberto Freddy",
    patientLastName: "Alberto Freddy",
    tiemestapStart: "23-12-2021, 7H30",
    tiemestapEnd: "23-12-2021, 7H40",
    stateProcess: "Terminado",
}

export default function TableAllProcessPilotsRow({ row = processDefault }) {
    const router = useRouter()

    const handleCreateReport = () => {
        router.push(`/report/by-patient?id=36&patient_id=${row.doc_identification}`)
    }



    return (
        <Grid container direction="row" justifyContent="center" alignItems="center"  >
            <Grid item xs={7} sm={4} md={3} lg={2} xl={2} >
                {row.doc_identification}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} md={3} lg={3} xl={3} >
                {`${row.first_name} ${row.last_name}`}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }} lg={2} xl={2} >
                {row.email}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }} lg={2} xl={2} >
                {row.birthday}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={3} lg={1} xl={1} textAlign="center">
                <BtnEditPatient patient_data={row} />
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={1} lg={1} xl={1} textAlign="center" >
                <ButtonStartProcess patient_data={row} />
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={1} lg={1} xl={1} textAlign="center" >
                <IconButton onClick={handleCreateReport} >
                    <PictureAsPdf className={styles.BtnReportRow} />
                </IconButton>
            </Grid>
            <Grid item sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'none', xs: 'block' } }} xs={5} textAlign="center" >
                <BtnEditPatient patient_data={row} />
                <ButtonStartProcess patient_data={row} />
                <IconButton className={styles.BtnReportRow} onClick={handleCreateReport}>
                    <PictureAsPdf />
                </IconButton>
            </Grid>
        </Grid>
    )
}
