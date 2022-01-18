// React js
import React from 'react'
// Material Ui
import { Backdrop, Button, Card, CardContent, CircularProgress, Grid, OutlinedInput } from '@mui/material'
// Local Components
import HeaderForms from '../../components/HeaderForms'
import Subtitle from '../../components/Subtitle'
import styles from "../../styles/FormRegisterPatient.module.scss";
import useFormRegisterPatient, { typesInputs } from '../../hooks/useFormRegisterPatient';

export default function FormRegisterPatient({ onSave }) {

    const {
        firstName,
        lastName,
        docIdentification,
        birthday,
        email,
        phone,
        handleChangeInput,
        handleSubmit,
        open
    } = useFormRegisterPatient({ onSave })

    return (
        <Grid item xs={12} md={11} lg={6} container direction="row" justifyContent="center" alignItems="center" className={styles.content} >
            <Card>
                <CardContent>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <form onSubmit={handleSubmit} >
                        <Grid container direction="row" alignItems="start" justifyContent="start" spacing={2}>
                            <Grid item xs={12} md={12} >
                                <HeaderForms title="Registro de Paciente" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} alignItems="start" justifyContent="start" container spacing={1} >

                                <Grid item xs={12} md={12} >
                                    <Subtitle title="Datos Básicos" icon="person_pin" />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Nombres: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        size="small"
                                        value={firstName}
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChangeInput(typesInputs.firstName)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Apellidos: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        value={lastName}
                                        variant="outlined"
                                        onChange={handleChangeInput(typesInputs.lastName)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Cédula/Pasaporte: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        value={docIdentification}
                                        variant="outlined"
                                        onChange={handleChangeInput(typesInputs.docIdentification)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Fecha Nacimiento: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        value={birthday}
                                        variant="outlined"
                                        type="date"
                                        onChange={handleChangeInput(typesInputs.birthday)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} alignItems="start" justifyContent="start" container spacing={1}>
                                <Grid item xs={12} md={12} >
                                    <Subtitle title="Contactos" icon="contact_phone" />
                                </Grid>

                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Correo: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        value={email}
                                        variant="outlined"
                                        type="email"
                                        onChange={handleChangeInput(typesInputs.email)}
                                    />
                                </Grid>

                                <Grid item xs={12} md={4} lg={3}  >
                                    <label>Teléfono celular: </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        value={phone}
                                        variant="outlined"
                                        onChange={handleChangeInput(typesInputs.phone)}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} container justifyContent="center" alignItems="center"  >
                                <Button type="submit" variant="contained"   >Registrar</Button>
                            </Grid>
                        </Grid>
                    </form>

                </CardContent>
            </Card>
        </Grid>
    )
}
