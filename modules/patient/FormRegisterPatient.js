import { Card, CardContent, Divider, Grid, OutlinedInput } from '@mui/material'
import React from 'react'
import HeaderForms from '../../components/HeaderForms'
import Subtitle from '../../components/Subtitle'

export default function FormRegisterPatient() {
    return (
        <Grid item xs={12} md={8} lg={6}  >
            <Card>
                <CardContent>
                    <form>
                        <Grid container direction="row" alignItems="start" justifyContent="start" spacing={1}>
                            <Grid item xs={12} md={12} >
                                <HeaderForms title="Registro de Paciente" />
                            </Grid>
                            <Divider />
                            <Grid item xs={12} md={12} >
                                <Subtitle title="Datos Básicos" icon="person_pin" />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Nombres: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Apellidos: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Doc. Identificación: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Fecha Nacimiento: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>

                            <Divider />
                            <Grid item xs={12} md={12} >
                                <Subtitle title="Profesión" icon="info" />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Profesión: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Fuerza: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Arma: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Grado: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <label>Arma: </label>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <OutlinedInput
                                    type='text'
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Divider />
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    )
}
