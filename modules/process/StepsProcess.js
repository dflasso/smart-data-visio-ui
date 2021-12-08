import { Box, Button, Card, CardContent, Grid, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";


export default function StepsProcess({ steps = [] }) {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid item xs={12} md={8} lg={6}>
            <Box sx={{ maxWidth: 400 }}>
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
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Terminar' : 'Continuar'}
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
            </Box>
        </Grid>
    )
}
