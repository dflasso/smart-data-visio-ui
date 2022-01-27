//React 
import React from 'react'
// Material UI
import { Grid } from '@mui/material'
// Styles
import styles from "../../../styles/EvalPilots.module.scss";

export default function TableAllProcessPilotsHeader() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center"  >
            <Grid item xs={7} sm={4} md={3} lg={2} xl={2} className={styles.headerTable}>
                Núm. Doc. Paciente
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} md={3} lg={3} xl={3} className={styles.headerTable}>
                Nombre del Paciente
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }} lg={2} xl={2} className={styles.headerTable}>
                Correo
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }} lg={2} xl={2} className={styles.headerTable}>
                Fecha Nacimiento
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={3} lg={1} xl={1} className={styles.headerTable}>
                Ver
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={1} lg={1} xl={1} className={styles.headerTable}>
                Iniciar Pruebas
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }} sm={2} md={1} lg={1} xl={1} className={styles.headerTable}>
                Reporte
        </Grid>
            <Grid item sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'none', xs: 'block' } }} xs={5} className={styles.headerTable}>
                Acciones
        </Grid>
        </Grid>
    )
}
