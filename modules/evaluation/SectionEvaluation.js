
import { Check } from '@mui/icons-material';
import { Alert, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

export default function SectionEvaluation({ description = "", questions = [], onChange }) {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (id_question) => (event) => {
        if (typeof onChange === "function") {
            const currentQuestion = questions.find(question => question.id_question === id_question)

            onChange({
                id_question,
                statement: currentQuestion.statement,
                answerLabel: event.target.name,
                answerValue: Number(event.target.value),
                answerMinValue: currentQuestion.answerMinValue,
                answerMaxValue: currentQuestion.answerMaxValue
            })
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignContent="center" paddingLeft={4} paddingRight={4} paddingTop={1} >
            <Grid item xs={12} marginBottom={2} >
                <Alert variant="outlined" severity="info" icon={<Check fontSize="inherit" />} >
                    {description}
                </Alert>
            </Grid>
            {
                questions.map(question => (
                    <Grid item xs={12} marginBottom={1} >
                        <FormControl key={question.id_question} fullWidth={isSmallScreen} >
                            <FormLabel id={question.id_question} color="info" filled required >{question.statement}</FormLabel>
                            <RadioGroup name={question.id_question} onChange={handleChange(question.id_question)} >
                                {
                                    Array.isArray(question.answers) &&
                                    question.answers.map(answer => (
                                        <FormControlLabel

                                            key={answer.idAnswer}
                                            value={answer.answerValue}
                                            label={answer.answerLabel}
                                            name={answer.answerLabel}
                                            control={<Radio />} />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                ))
            }
        </Grid>
    )
}
