// React.js
import React, { useEffect, useState } from 'react'
// Next.js
import { useRouter } from 'next/router'
// Materal UI
import { Button, Grid, OutlinedInput, Skeleton } from '@mui/material'
// Local Components
import CardNavHorizontal from '../../../components/CardNavHorizontal'
//Providers Data
import { providers } from "../../../providers";
// Validations
import useLayout from '../../../hooks/useLayout';
import Swal from 'sweetalert2';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const backend = providers.backend

export default function ContainerInfoPatient({ idTest, patientNumDocument }) {
    //hook router
    const router = useRouter()
    // hook layout
    const { updateFlagShowBackdrop } = useLayout()
    //hook state
    const [patient, setPatient] = useState(null)
    const [fullInfo, setFullInfo] = useState(false)

    useEffect(() => {
        updateFlagShowBackdrop({ show: true })
        backend.patients.find_by_num_document({ num_document: patientNumDocument })
            .then(response => setPatient(response))
            .catch(error => {
                updateFlagShowBackdrop({ show: false })
                if (error.status === 404) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ocurrio un error al cargar la información del Paciente.',
                        text: 'Por favor, vuelva a seleccionar un paciente. Si el problema persiste contáctese con soporte.'
                    }).then(
                        () => {
                            updateFlagShowBackdrop({ show: true })
                            router.push("/process/eval-pilots")
                                .finally(() => updateFlagShowBackdrop({ show: false }))
                        }
                    )
                } else {
                    updateFlagShowBackdrop({ show: true })
                    Swal.fire({
                        icon: 'error',
                        title: 'Ocurrio un error interno.',
                        text: 'Contáctese con soporte.'
                    }).then(
                        () => {
                            updateFlagShowBackdrop({ show: true })
                            router.push("/process/eval-pilots")
                                .finally(() => updateFlagShowBackdrop({ show: false }))
                        }
                    )
                }
            })
            .finally(() => updateFlagShowBackdrop({ show: false }))
        return () => { }
    }, [])

    const handleShowInformation = (show) => () => {
        setFullInfo(show)
    }

    if (!patient) {
        return (
            <CardNavHorizontal
                iconAvatarHeader="account_box"
                title="Información Paciente"
            >
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </CardNavHorizontal>
        )
    }

    return (
        <CardNavHorizontal
            iconAvatarHeader="account_box"
            title="Información Paciente"
        >
            <Grid container direction="row" spacing={1}>

                <Grid item xs={11} md={3} lg={3} xl={2}>
                    <label>Cédula/Pasaporte: </label>
                </Grid>
                <Grid item xs={11} md={9} lg={4} >
                    <OutlinedInput
                        fullWidth
                        size="small"
                        value={patient.doc_identification}
                    />
                </Grid>
                <Grid item xs={11} md={9} lg={6}  >
                    {
                        fullInfo ?
                            <Button size="small"
                                variant="outlined"
                                startIcon={<VisibilityOff />}
                                onClick={handleShowInformation(false)}
                            > Ocultar Información</Button> :
                            <Button size="small"
                                variant="contained"
                                startIcon={<Visibility />}
                                onClick={handleShowInformation(true)}> Más Información</Button>
                    }
                </Grid>
                {fullInfo && (
                    <>

                        <Grid item xs={11} md={3} lg={3} xl={2}>
                            <label>Nombre(s):</label>
                        </Grid>
                        <Grid item xs={11} md={3} lg={3} xl={4}>
                            <OutlinedInput
                                fullWidth
                                size="small"
                                value={patient.first_name}
                            />
                        </Grid>
                        <Grid item xs={11} md={3} lg={3}>
                            <label>Apellidos(s):</label>
                        </Grid>
                        <Grid item xs={11} md={3} lg={3} >
                            <OutlinedInput
                                fullWidth
                                size="small"
                                value={patient.last_name}
                            />
                        </Grid>

                        <Grid item xs={11} md={3} lg={3} xl={2}>
                            <label>Correo:</label>
                        </Grid>
                        <Grid item xs={11} md={3} lg={3} xl={4} >
                            <OutlinedInput
                                fullWidth
                                size="small"
                                value={patient.email}
                            />
                        </Grid>
                        <Grid item xs={11} md={3} lg={3}>
                            <label>Teléfono celular:</label>
                        </Grid>
                        <Grid item xs={11} md={3} lg={3} >
                            <OutlinedInput
                                fullWidth
                                size="small"
                                value={patient.phone}
                            />
                        </Grid>
                    </>
                )}
            </Grid>
        </CardNavHorizontal>
    )
}
