// React js
import React from 'react'

//Material ui
import { Button, Grid } from '@mui/material'

//Local Components
import CardNavHorizontal from '../../components/CardNavHorizontal'


export default function ContainerQuestionariesAndTestFinal() {
    return (
        <CardNavHorizontal
            iconAvatarHeader="assessment"
            title="Cuestionario y Evaluación posterior a realizar la tarea"
        >
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth>
                        Ejecutar Cuestionario
                    </Button>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth >
                        Detalles Cuestionario
                    </Button>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth >
                        Ejecutar Evaluación
                    </Button>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth >
                        Detalles Evaluación
                    </Button>
                </Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
