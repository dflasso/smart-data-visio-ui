// React js
import React from 'react'
// Material Ui
import {
    Alert, Backdrop, Button, Card, CardContent, Checkbox, CircularProgress,
    FormControl, FormControlLabel, Grid, OutlinedInput, Radio, RadioGroup
} from '@mui/material'
// validations
import { useFormik } from 'formik'
import * as yup from 'yup'

// Local Components
import HeaderForms from '../../components/HeaderForms'
import Subtitle from '../../components/Subtitle'
import AutocompleteOrCreate from '../../components/AutocompleteOrCreate'
import styles from "../../styles/FormRegisterPatient.module.scss";
import useFormRegisterPatient, { initForm } from '../../hooks/useFormRegisterPatient';
// validations
import { validarCedula } from "../../util/validateDocuments";
//Constans
import { buildOptionsToAutocomplete, professions, forces } from '../../constants/professions'
import Languages from '../../constants/Languages'

const validationSchema = yup.object({
    email: yup
        .string('Ingrese un correo electrónico')
        .email('Ingrese un correo electrónico válido.')
        .required('El correo electrónico es necesario.'),
    doc_identification: yup
        .string('Ingrese una cédula o pasaporte')
        .required('Una cédula o un pasaporte es necesario.'),
    first_name: yup
        .string('Ingrese sus nombres')
        .required('Sus nombres son necesarios'),
    last_name: yup
        .string('Ingrese su(s) apellido(s)')
        .required('Sus apellidos son necesarios'),
    phone: yup
        .string('Ingrese su número celular.')
        .min(10, 'El número celular debe tener al menos 10 dígitos.')
        .max(13, 'El número celular no debe tener más de 13 dígitos.'),
    birthday: yup
        .date('Fecha de nacimiento')
        .required('La fecha de nacimiento es necesaria'),
    diseases: yup
        .string('Ingrese enfermedades conocidas.'),
});

export default function FormRegisterUser({ onSave, initialValues = initForm, recoveryPatient = false }) {
    const {
        handleGoBack,
        handleSubmit,
        optionalData,
        handleOnChangeOptionalData,
        showForces,
        showRanksMilitaries,
        tryLoadRanksMilitaries,
        open,
        handleOnBlur,
        existPatient
    } = useFormRegisterPatient({ onSave, recoveryPatient })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        validate: (values, props) => {
            const errors = {};
            if (values.selectedDocument === 'C') {
                let validCI = validarCedula(values.doc_identification)
                if (!validCI) {
                    errors.doc_identification = 'Cédula Inválida.'
                }
            }
            return errors;
        },
        onSubmit: (values) => {
            handleSubmit(values)
        },
    });

    const ltsProfesions = buildOptionsToAutocomplete({ ltsOptions: professions, language: Languages.spanish })
    const ltsForces = buildOptionsToAutocomplete({ ltsOptions: forces, language: Languages.spanish })
    const ltsranksMilitaries = tryLoadRanksMilitaries()


    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={10} marginBottom={10}>
            <Grid item xs={12} md={11} lg={8} xl={6} container direction="row" justifyContent="center" alignItems="center" className={styles.content} >
                <Card>
                    <CardContent>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container direction="row" alignItems="start" justifyContent="start" spacing={2}>
                                <Grid item xs={12} md={12} >
                                    <HeaderForms title="Registro de Usuario" />
                                    <Alert severity="info">Los campos marcados con (<b style={{ color: '#FF0000' }} >*</b>) son obligatorios. </Alert>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} alignItems="start" justifyContent="start" container spacing={1} >
                                    <Grid item xs={12} md={12} >
                                        <Subtitle title="Datos Básicos" icon="person_pin" />
                                    </Grid>

                                    <Grid item xs={12} md={4} lg={3} >
                                        <label>Cédula/Pasaporte: <b style={{ color: '#FF0000' }} >*</b> </label>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={5} >
                                        <OutlinedInput
                                            fullWidth
                                            id="doc_identification"
                                            name="doc_identification"
                                            size="small"
                                            value={formik.values.doc_identification}
                                            onChange={formik.handleChange}
                                            error={formik.touched.doc_identification && Boolean(formik.errors.doc_identification)}
                                            onBlur={handleOnBlur(formik.values.doc_identification, formik)}
                                        />
                                        {formik.touched.doc_identification && (<small style={{ color: '#FF0000' }}  > {formik.errors.doc_identification} </small>)}
                                    </Grid>

                                    <Grid item xs={12} md={4} lg={4} >
                                        <FormControl>
                                            <RadioGroup row >
                                                <FormControlLabel value="C" control={<Radio checked={formik.values.selectedDocument === 'C'} onChange={formik.handleChange} name="selectedDocument" />} label="Cédula" />
                                                <FormControlLabel value="P" control={<Radio checked={formik.values.selectedDocument === 'P'} onChange={formik.handleChange} name="selectedDocument" />} label="Pasaporte" />
                                            </RadioGroup>

                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={3}  >
                                        <label>Nombres: <b style={{ color: '#FF0000' }} >*</b> </label>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={9} >
                                        <OutlinedInput
                                            fullWidth
                                            id="first_name"
                                            name="first_name"
                                            size="small"
                                            value={formik.values.first_name}
                                            onChange={formik.handleChange}
                                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                        />
                                        {formik.touched.first_name && (<small style={{ color: '#FF0000' }}  > {formik.errors.first_name} </small>)}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Apellidos: <b style={{ color: '#FF0000' }} >*</b> </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        fullWidth
                                        id="last_name"
                                        name="last_name"
                                        size="small"
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                    />
                                    {formik.touched.last_name && (<small style={{ color: '#FF0000' }}  > {formik.errors.last_name} </small>)}
                                </Grid>

                                <Grid item xs={12} md={4} lg={3} >
                                    <label>Fecha Nacimiento: <b style={{ color: '#FF0000' }} >*</b> </label>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9} >
                                    <OutlinedInput
                                        fullWidth
                                        id="birthday"
                                        name="birthday"
                                        size="small"
                                        value={formik.values.birthday}
                                        onChange={formik.handleChange}
                                        type="date"
                                        error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                                    />
                                    {formik.touched.birthday && (<small style={{ color: '#FF0000' }}  > {formik.errors.birthday} </small>)}
                                </Grid>

                                <Grid item xs={12} md={12} lg={12} alignItems="start" justifyContent="start" container spacing={1}>
                                    <Grid item xs={12} md={12} >
                                        <Subtitle title="Contactos" icon="contact_phone" />
                                    </Grid>

                                    <Grid item xs={12} md={4} lg={3}  >
                                        <label>Correo:  <b style={{ color: '#FF0000' }} >*</b> </label>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={9} >
                                        <OutlinedInput
                                            fullWidth
                                            id="email"
                                            name="email"
                                            size="small"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            type="email"
                                        />
                                        {formik.touched.email && (<small style={{ color: '#FF0000' }}  > {formik.errors.email} </small>)}
                                    </Grid>

                                    <Grid item xs={12} md={4} lg={3}  >
                                        <label>Teléfono celular: </label>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={9} >
                                        <OutlinedInput
                                            fullWidth
                                            id="phone"
                                            name="phone"
                                            size="small"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        />
                                        {formik.touched.phone && (<small style={{ color: '#FF0000' }}  > {formik.errors.phone} </small>)}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} alignItems="start" justifyContent="start" container spacing={1}>
                                    <Grid item xs={12} md={12} >
                                        <Subtitle title="Credenciales e Información del Aplicativo" icon="health_and_safety" />
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={3}  >
                                        <label>Contraseña: <b style={{ color: '#FF0000' }} >*</b> </label>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={9} >
                                        <OutlinedInput
                                            fullWidth
                                            id="phone"
                                            name="phone"
                                            size="small"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        />
                                        {formik.touched.phone && (<small style={{ color: '#FF0000' }}  > {formik.errors.phone} </small>)}
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={3}  >
                                        <label>Perfil:<b style={{ color: '#FF0000' }} >*</b> </label>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={9} >
                                        <OutlinedInput
                                            fullWidth
                                            id="phone"
                                            name="phone"
                                            size="small"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        />
                                        {formik.touched.phone && (<small style={{ color: '#FF0000' }}  > {formik.errors.phone} </small>)}
                                    </Grid>
                                </Grid>


                                <Grid item xs={12} md={12} lg={12} container justifyContent="center" alignItems="center"  >
                                    <Grid item xs={3}>
                                        {
                                            !existPatient && (<Button color="primary" variant="contained" type="submit">
                                                Guardar
                                            </Button>)
                                        }
                                        {
                                            existPatient && (<Button color="primary" variant="contained" type="submit">
                                                Actualizar
                                            </Button>)
                                        }

                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button color="error" variant="contained" onClick={handleGoBack}>
                                            Regresar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </form>
                    </CardContent>
                </Card>
            </Grid >
        </Grid>
    )
}
