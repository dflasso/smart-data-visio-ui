import { Alert, AlertTitle, Button, CircularProgress, Grid } from '@mui/material'
import React from 'react'
import useTestOphthalmologicalTitmus from '../../../hooks/useTestOphthalmologicalTitmus'
import ButtonAnimalsTest from './ButtonAnimalsTest'
import ButtonCirclesTest from './ButtonCirclesTest'
import ButtonHouseFly from './ButtonHouseFly'

export default function TitmusTestStepper() {
    const { goNextTab, goPreviousTab,
        idTest, circles, animals,
        handleSaveHouseFly, handleSaveCirclesResults, handleSaveAnimalsResults } = useTestOphthalmologicalTitmus()

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>

            <Grid item xs={12} >
                <Alert severity="info" variant="outlined">
                    <AlertTitle><b>Prueba de Titmus</b></AlertTitle>
                    El test de estereopsis, test de la mosca o test de titmus es la prueba estandar
                    para evaluar la visión estereoscópica de una persona y su grado de estereopsis.
            </Alert>
            </Grid>
            <Grid item xs={12} >
                <Alert severity="info" >
                    <AlertTitle><b>Mosca.-</b> Ingresar los detalles del paciente al observar la mosca</AlertTitle>

                    <ButtonHouseFly idTest={idTest} onSave={handleSaveHouseFly} />
                </Alert>

            </Grid>
            <Grid item xs={12} >
                <Alert severity="info" >
                    <AlertTitle><b>Círculos.- </b>
                    Ingresar el círculo que el paciente escogio en cada figura.</AlertTitle>
                    {
                        (circles.length === 0) ?
                            <CircularProgress />
                            :
                            <ButtonCirclesTest circles={circles} onSave={handleSaveCirclesResults} idTest={idTest} />
                    }

                </Alert>

            </Grid>
            <Grid item xs={12} >
                <Alert severity="info" >
                    <AlertTitle><b>Animales.- </b>
                    Ingresar los animales que el paciente escogio en cada fila.</AlertTitle>
                    <ButtonAnimalsTest animals={animals} onSave={handleSaveAnimalsResults} idTest={idTest} />
                </Alert>

            </Grid>
            <Grid item xs={5} md={4} lg={2} textAlign="center" marginTop={2} >
                <Button variant="contained" color="error" onClick={goPreviousTab} >  Atras </Button>
            </Grid>
            <Grid item xs={5} md={4} lg={2} textAlign="center" marginTop={2} >
                <Button variant="contained" color="success" onClick={goNextTab}>  Siguiente </Button>
            </Grid>
        </Grid>
    )
}
