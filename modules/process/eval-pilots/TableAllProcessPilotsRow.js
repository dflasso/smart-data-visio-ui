import { Edit, InfoRounded, PictureAsPdf } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import React from 'react'
import styles from "../../../styles/EvalPilots.module.scss";

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
                <IconButton className={styles.BtnDetailRow} >
                    <Edit />
                </IconButton>
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={1} lg={1} xl={1} textAlign="center" >
                <IconButton className={styles.BtnDetailRow} >
                    <InfoRounded />
                </IconButton>
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={1} lg={1} xl={1} textAlign="center" >
                <IconButton >
                    <PictureAsPdf className={styles.BtnReportRow} />
                </IconButton>
            </Grid>
            <Grid item sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'none', xs: 'block' } }} xs={5} textAlign="center" >
                <IconButton className={styles.BtnDetailRow} >
                    <Edit />
                </IconButton>
                <IconButton className={styles.BtnDetailRow}>
                    <InfoRounded />
                </IconButton>
                <IconButton className={styles.BtnReportRow} >
                    <PictureAsPdf />
                </IconButton>
            </Grid>
        </Grid>
    )
}
