import { Box, Button, Card, CardContent, Grid, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function StepsProcess({ steps = [], sumaryProcess = {} }) {
    const [activeStep, setActiveStep] = useState(sumaryProcess.currentsStep)
    const router = useRouter()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleProcess = () => {
        try {
            router.push(steps[activeStep].url);
        } catch (error) {
            console.error(sumaryProcess.currentsStep)
        }
    }
    return (
        <Grid item xs={12} md={6} lg={7}>

            <Card>
                <CardContent>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) =>
                        (<Step key={step.id}>
                            <StepLabel>
                                {step.name}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="outlined"
                                            onClick={handleProcess}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Ingresar Datos
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Regresar
                                    </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>)
                        )}
                    </Stepper>
                </CardContent>
            </Card>
        </Grid>
    )
}
