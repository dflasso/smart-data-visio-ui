
import { Card, Grid } from '@mui/material'
import React from 'react'
import styles from "../../styles/ContentPatient.module.scss";

export default function HeaderSearchPatiends() {

    return (
        <Grid item xs={12} md={12} lg={10}  >
            <Card className={styles.containerCardDetailPatient} >

                <Grid container direction="row" justifyContent="start" alignItems="center" >

                    <Grid item sx={{ display: { xs: 'flex' } }} sm={1} md={1} xl={1} lg={1} alignSelf="center" justifyContent="center">
                        <div className={styles.celdHeaderSearchPatient}>
                            Seleccionar
                        </div>
                    </Grid>

                    <Grid item xs={8} sx={{ display: { lg: 'none', xs: 'flex', sm: 'flex', md: 'none' } }} >
                        <Grid container direction="column"  >
                            <Grid item className={styles.celdHeaderSearchPatient} >
                                Paciente
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={3} xl={4} >
                        <div className={styles.celdHeaderSearchPatient}>
                            Nombres y Apellidos
                        </div>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={2} xl={1} textAlign="center"  >
                        <div className={styles.celdHeaderSearchPatient}>
                            Identificación
                        </div>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'none' } }} lg={3} xl={3} textAlign="center" >
                        <div className={styles.celdHeaderSearchPatient}>
                            Correo electrónico
                        </div>
                    </Grid>
                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={2} xl={2} textAlign="center" >
                        <div className={styles.celdHeaderSearchPatient}>
                            Teléfono celular
                        </div>
                    </Grid>
                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={2} xl={1} textAlign="center" >
                        <div className={styles.celdHeaderSearchPatient}>
                            Fecha Nacimiento
                        </div>
                    </Grid>


                </Grid>
            </Card>
        </Grid >
    )
}
