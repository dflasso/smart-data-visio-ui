// React.js
import React from 'react'
// Next.js
import { useRouter } from 'next/router'

// Materal UI
import { Button, Grid } from '@mui/material'

// Local Components
import CardNavHorizontal from '../../../components/CardNavHorizontal'


// Validations
import { isNumber } from "../../../util/validations";

export default function ContainerInfoPatient({ idTest }) {
    const isIdValid = isNumber(idTest)
    const router = useRouter()

    const handleRegisterPatienti = () => {
        router.push("/patient/register/300")
    }
    return (
        <CardNavHorizontal
            iconAvatarHeader="account_box"
            title="Información Paciente"
        >
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={3} lg={3}>
                    <Button variant="outlined" fullWidth onClick={handleRegisterPatienti} >
                        Registrar Paciente
                </Button>
                </Grid>
                <Grid item xs={11} md={3} lg={3} >
                    <Button variant="outlined" fullWidth>
                        Buscar Paciente
                </Button>
                </Grid>
                <Grid item xs={11} md={3} lg={3}>
                    <Button variant="outlined" disabled={!isIdValid} fullWidth>
                        Ver Detalles Paciente
                </Button>
                </Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
