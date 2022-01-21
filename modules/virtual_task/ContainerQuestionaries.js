// React js
import React from 'react'
//next 
import { useRouter } from 'next/router'

//Material ui
import { Button, Grid } from '@mui/material'

//Local Components
import CardNavHorizontal from '../../components/CardNavHorizontal'



export default function ContainerQuestionaries() {
    const router = useRouter()
    const handleOnClick = () => {
        router.push("/questionnaire/pre")
    }
    return (
        <CardNavHorizontal
            iconAvatarHeader="description"
            title="Cuestionario previo a realizar la tarea"
        >
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth onClick={handleOnClick}>
                        Ejecutar Cuestionario
                    </Button>
                </Grid>
                {/* <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth >
                        Detalles Cuestionario
                    </Button>
                </Grid> */}
            </Grid>
        </CardNavHorizontal>
    )
}
