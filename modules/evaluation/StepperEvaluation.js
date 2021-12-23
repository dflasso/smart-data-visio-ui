import { Box, Stepper, Step, StepLabel, Typography, Button, Container } from "@mui/material";
import React, { useState } from "react";
import { ItemsEvaluation } from "./ItemsEvaluation";

const evaluation = require("./evaluation.json");
const itemsEvaluations = evaluation.evaluationsTest;
/*evaluation.evaluationsTest.map((item,index) => {
    console.log(`En la vuelta ${index} tengo esto ${item.title}`);
})*/


const StepperEvaluation = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    
    const handleNext = () => {
        let newSkipped = skipped;    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
      };

  return (
    <>
    <Container>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {itemsEvaluations.map((item,index) => (
            <Step key={item}>
              <StepLabel>{item.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
        { 
            activeStep !== itemsEvaluations.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>Datos de la tabla {activeStep + 1}</Typography>
                    <ItemsEvaluation itemIndex={activeStep}/>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        >
                        Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                            {activeStep === itemsEvaluations.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </>
            ) : (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            )
        }
      </Box>
    </Container>
    </>
  );
};

export default StepperEvaluation;
