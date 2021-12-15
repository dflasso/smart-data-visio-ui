import { Button, Card, CardContent, Divider, Grid, OutlinedInput } from '@mui/material'
import React from 'react'
import HeaderForms from '../../components/HeaderForms'
import Subtitle from '../../components/Subtitle'
import styles from "../../styles/FormRegisterPatient.module.scss";

export default function FormRegisterPatient() {
    return (
        <Grid item xs={12} md={11} lg={11} container direction="row" justifyContent="center" alignItems="center" className={styles.content} >
            <Card>
                <CardContent>
                    <form>
                        <Grid container direction="row" alignItems="start" justifyContent="start" spacing={2}>
                            <Grid item xs={12} md={12} >
                                <HeaderForms title="Registro de Paciente" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6} alignItems="start" justifyContent="start" container spacing={1} >

                                <Divider />
                                <Grid item xs={12} md={12} >
                                    <Subtitle title="Datos Básicos" icon="person_pin" />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Nombres: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Apellidos: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Doc. Identificación: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Fecha Nacimiento: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={6} alignItems="start" justifyContent="start" container spacing={1}>
                                <Grid item xs={12} md={12} >
                                    <Subtitle title="Contactos" icon="contact_phone" />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Teléfono celular: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Teléfono convencional: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>En caso de emergecia llamar a: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Correo: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={6} alignItems="start" justifyContent="start" container spacing={1}>
                                <Grid item xs={12} md={12} >
                                    <Subtitle title="Profesión" icon="info" />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Profesión: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Fuerza: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Arma: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Grado: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Arma: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9}>
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>

                            </Grid>

                            <Grid item xs={12} md={12} lg={6} alignItems="start" justifyContent="start" container spacing={1}>
                                <Grid item xs={12} md={12} >
                                    <Subtitle title="Dirección de la Vivienda" icon="info" />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Barrio: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Ciudad: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Calle Principal: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Calle Secundaria: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Núm. Casa o Referencia: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9}>
                                    <OutlinedInput
                                        type='text'
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>

                            </Grid>
                            <Grid item xs={12} md={12} lg={12} container justifyContent="center" alignItems="center"  >
                                <Button variant="contained">Registrar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    )
}
