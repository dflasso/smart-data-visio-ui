import { Alert, AlertTitle, Button, Grid, Step, StepContent, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import useTestOphthalmologicalVirtualTask from '../../hooks/useTestOphthalmologicalVirtualTask'

export default function VirtualTaskStep({ name = "", code = "", numNextTab = "2", numPreviousTab = "1" }) {
    const { goNextTab, goPreviousTab, activeStep } = useTestOphthalmologicalVirtualTask({ nextTab: numNextTab, previousTab: numPreviousTab })
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>

            <Grid item xs={12} >
                <Alert severity="info" variant="outlined">
                    <b>{name}</b>
                </Alert>
            </Grid>
            <Grid item xs={12} >
                <Stepper activeStep={activeStep} orientation="vertical">
                    <Step>
                        <StepLabel>Consentimiento Informado</StepLabel>
                        <StepContent>
                            <Alert severity="info" >
                                <AlertTitle> Acepto los términos y condiciones.</AlertTitle>
                            </Alert>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Antes de la Tarea</StepLabel>
                        <StepContent>
                            <Alert severity="info" >
                                <AlertTitle>Por favor realize el siguiente cuestionario.</AlertTitle>
                            </Alert>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Tarea Virtual</StepLabel>
                        <StepContent>
                            <Alert severity="info" >
                                <AlertTitle>Por favor cargue el archivo con los resultados.</AlertTitle>
                            </Alert>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Después de la Tarea</StepLabel>
                        <StepContent>
                            <Alert severity="info" >
                                <AlertTitle>Por favor realize el siguiente cuestionario.</AlertTitle>
                            </Alert>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Evaluación de Satisfación</StepLabel>
                        <StepContent>
                            <Alert severity="info" >
                                <AlertTitle>Por favor realize la siguiente evaluación para conocer la experiencia del usuario.</AlertTitle>
                            </Alert>
                        </StepContent>
                    </Step>
                </Stepper>
            </Grid>
            <Grid item xs={5} md={4} lg={2} textAlign="center" marginTop={2} >
                <Button variant="contained" color="error" onClick={goPreviousTab}>  Atras </Button>
            </Grid>
            <Grid item xs={5} md={4} lg={2} textAlign="center" marginTop={2} >
                <Button variant="contained" color="success" onClick={goNextTab} >  Siguiente </Button>
            </Grid>
        </Grid>
    )
}
