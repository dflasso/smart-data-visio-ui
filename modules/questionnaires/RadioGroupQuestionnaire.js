import React from "react";
import { FormControl, Container, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import styles from "../../styles/QuestionairePre.module.scss";

const RadioGroupQuestionnaire = () => {
  return (
    <>
        <FormControl component="fieldset" className={styles.radioItems}>
            <RadioGroup row name="row-radio-buttons-group" >
                <FormControlLabel value="nada" control={<Radio />} label="Nada" labelPlacement="top"/>
                <FormControlLabel value="poco" control={<Radio />} label="Un poco" labelPlacement="top"/>
                <FormControlLabel value="moderado" control={<Radio />} label="Moderado" labelPlacement="top"/>
                <FormControlLabel value="bastante" control={<Radio />} label="Bastante" labelPlacement="top"/>
            </RadioGroup>
        </FormControl>
    </>
  );
};

export default RadioGroupQuestionnaire;
