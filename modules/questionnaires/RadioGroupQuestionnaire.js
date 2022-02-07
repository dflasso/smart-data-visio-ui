import React from "react";
import { FormControlLabel, RadioGroup, Radio, Grid } from '@mui/material'
import styles from "../../styles/QuestionairePre.module.scss";

const RadioGroupQuestionnaire = ({ answers = [], statement = "", id_question = "", onChange, answerMinValue = 1, answerMaxValue = 5 }) => {

  const handleChange = (event, value) => {

    if (typeof onChange === "function") {
      onChange({
        id_question,
        statement,
        answerValue: value,
        answerLabel: event.target.name,
        answerMinValue,
        answerMaxValue
      })
    }
  }

  return (
    <Grid container spacing={1}>
      <Grid item md={12} lg={12} sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} spacing={1}>
        <RadioGroup row aria-label="options" name="row-radio-buttons-group" onChange={handleChange}>
          {
            answers.map(answer => (
              <FormControlLabel key={answer.idAnswer} value={answer.answerValue} control={<Radio color="primary" />} name={answer.answerLabel} label={answer.answerLabel} />
            ))
          }
        </RadioGroup>
      </Grid>
      <Grid container xs={10} className={styles.questionContainerOptions} direction="column" sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block' } }} spacing={1} >
        <RadioGroup aria-label="options" name="row-radio-buttons-group" onChange={handleChange}>
          {
            answers.map(answer => (
              <Grid item xs={12} sm={12} key={answer.idAnswer}>
                <FormControlLabel value={answer.answerValue} control={<Radio color="primary" />} label={answer.answerLabel} />
              </Grid>
            ))
          }
        </RadioGroup>
      </Grid>
    </Grid>
  )
};

export default RadioGroupQuestionnaire;
