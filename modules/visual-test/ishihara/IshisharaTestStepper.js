import { Alert, AlertTitle, Button, Grid, Step, StepContent, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import useTestOphthalmologicalIshihara from '../../../hooks/useTestOphthalmologicalIshihara'
import IshiharaTaskDetailsStep from './IshiharaTaskDetailsStep'
import IshiharaTaskOptions from './IshiharaTaskOptions'

export default function IshisharaTestStepper() {
    const { ishiharaCards, goNextTab, goPreviousTab,
        activeStep, handleSave, handleBackTest, handleNextTest,
        checkIfCardWasSaved, getResulCard } = useTestOphthalmologicalIshihara()

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>

            <Grid item xs={12} >
                <Alert severity="info" variant="outlined">
                    <AlertTitle><b>Prueba Ishihara</b></AlertTitle>
                    El Test de Ishihara sirve para valorar la existencia de daltonismo. Es decir,
                    si hay una alteración daltónica que afecta a la visión del color (como el verde y el rojo).
                </Alert>
            </Grid>
            <Grid item xs={12} >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {
                        Array.isArray(ishiharaCards) &&
                        ishiharaCards.map(
                            (card, index) => (
                                <Step key={card.id}>
                                    <StepLabel>
                                        {card.name_test_spanish}
                                    </StepLabel>
                                    <StepContent>
                                        <Alert severity="info">
                                            <AlertTitle>Por favor al mostrar la lámina con los números o figuras dar un clic en <b>"Iniciar"</b> con el fin
                                            de registrar los datos</AlertTitle>
                                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>

                                                {
                                                    checkIfCardWasSaved({ idCard: card.id }) ?
                                                        <>
                                                            <Grid item xs={12} md={4} textAlign="center">
                                                                <IshiharaTaskDetailsStep
                                                                    typeBtn="contained"
                                                                    results={getResulCard({ idCard: card.id })}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} md={4} textAlign="center">
                                                                <Button color="success" variant="contained" onClick={handleNextTest}>
                                                                    Siguiente Lámina
                                                                </Button>
                                                            </Grid>
                                                        </>
                                                        :
                                                        <Grid item xs={12} md={4} textAlign="center">
                                                            <IshiharaTaskOptions
                                                                optionsKnow={card.items_card}
                                                                onSave={handleSave}
                                                                idTask={card.id}
                                                                descriptionTask={card.name_test_spanish}
                                                                typeBtn="normalContainedFull"
                                                                BtnText="Iniciar"
                                                            />
                                                        </Grid>
                                                }



                                                {
                                                    (index !== 0) &&

                                                    (<Grid item xs={12} md={4} textAlign="center" >
                                                        <Button color="inherit" variant="contained" onClick={handleBackTest} fullWidth>
                                                            Regresar
                                                        </Button>
                                                    </Grid>)
                                                }
                                            </Grid>
                                        </Alert>
                                    </StepContent>
                                </Step>
                            )
                        )

                    }
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
