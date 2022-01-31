import { ArrowBack, ArrowForward, Download, Info, Upload } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Grid, Step, StepContent, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import useTestOphthalmologicalVirtualTask from '../../hooks/useTestOphthalmologicalVirtualTask'

//Styles
import styles from "../../styles/VirtualTaskStep.module.scss";
import QuestionaryDialog from '../questionnaires/QuestionaryDialog';

export default function VirtualTaskStep({ name = "", code = "", numNextTab = "2", numPreviousTab = "1" }) {
    const { goNextTab, goPreviousTab, activeStep,
        handleNextTest, handleBackTest } = useTestOphthalmologicalVirtualTask({ nextTab: numNextTab, previousTab: numPreviousTab })

    const handleDownloadTermsConditions = () => {
        window.open("/terminos_condiciones.pdf", "_blank")
    }

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
                            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.containerStep} spacing={1} >
                                <Grid item xs={12} className={styles.containerStepHeader} ><Info color="info" /> Términos y condiciones que el paciente acepta antes de iniciar la tarea.</Grid>
                                <Grid item xs={6}>
                                    <Button startIcon={<Download />} onClick={handleDownloadTermsConditions} > Descargar acta de consentimiento.</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button startIcon={<Download />} onClick={handleDownloadTermsConditions} > Descargar hoja informativa.</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button startIcon={<Upload />} variant="contained" component="label" > Subir acta firmada.
                                    <input type="file" hidden /></Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button startIcon={<ArrowForward />} variant="contained" color="inherit" onClick={handleNextTest}> Continuar con el proceso.</Button>
                                </Grid>
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Antes de la Tarea</StepLabel>
                        <StepContent>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} className={styles.containerStep}>
                                <Grid item xs={12} className={styles.containerStepHeader} ><Info color="info" /> Por favor, realize el siguiente cuestionario..</Grid>
                                <Grid item xs={4}>
                                    <QuestionaryDialog />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<ArrowBack />} variant="contained" color="inherit" onClick={handleBackTest}  >Regresar </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<ArrowForward />} variant="contained" color="inherit" onClick={handleNextTest} > Continuar </Button>
                                </Grid>
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Tarea Virtual</StepLabel>
                        <StepContent>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} className={styles.containerStep}>
                                <Grid item xs={12}>
                                    <Alert severity="info" >
                                        <AlertTitle>Por favor cargue el archivo con los resultados.</AlertTitle>
                                    </Alert>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<Upload />} variant="contained" component="label" > Subir archivo
                                    <input type="file" hidden /></Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<ArrowBack />} variant="contained" color="inherit" onClick={handleBackTest}  >Regresar </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<ArrowForward />} variant="contained" color="inherit" onClick={handleNextTest} > Continuar </Button>
                                </Grid>
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Después de la Tarea</StepLabel>
                        <StepContent>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} className={styles.containerStep}>
                                <Grid item xs={12}>
                                    <Alert severity="info" >
                                        <AlertTitle>Por favor, realize el siguiente cuestionario.</AlertTitle>
                                    </Alert>
                                </Grid>
                                <Grid item xs={4}>
                                    <QuestionaryDialog />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<ArrowBack />} variant="contained" color="inherit" onClick={handleBackTest}  >Regresar </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<ArrowForward />} variant="contained" color="inherit" onClick={handleNextTest} > Continuar </Button>
                                </Grid>
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Evaluación de Satisfación</StepLabel>
                        <StepContent>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} className={styles.containerStep}>
                                <Grid item xs={12}>
                                    <Alert severity="info" >
                                        <AlertTitle>Por favor, realize la siguiente evaluación para conocer la experiencia del usuario.</AlertTitle>
                                    </Alert>
                                </Grid>
                                <Grid item xs={4}>
                                    <QuestionaryDialog />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<ArrowBack />} variant="contained" color="inherit" onClick={handleBackTest}  >Regresar </Button>
                                </Grid>
                            </Grid>
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
