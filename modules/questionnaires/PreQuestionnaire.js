import { Grid, Typography, Button, List, ListItem, ListItemText,
         Radio, RadioGroup, FormControlLabel, FormControl} from "@mui/material";
import React, { useState } from "react";

const questions = require('./questions');

const PreQuestionnaire = () => {
  const [alignment, setAlignment] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleChange = (event, value) => {
    selectedOptions.push(value);
    setAlignment(value);
  };

  const handleClick = (event, value) => {
    console.log(selectedOptions)
  };
  return (
    <>
        <br /><br /><br /><br />   
      <Grid item xs={12} md={8} lg={12}>
        <Typography align="center" variant="h5"><strong>Completar <i>ANTES</i> de hacer la tarea</strong></Typography > <br />
        <Typography align="center" variant="h6">Seleccione la opción que crea que se ajusta más a cómo se siente <strong>ahora mismo</strong></Typography > <br />
        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <List sx={{ width: "100%", maxWidth: 710, bgcolor: "background.paper" }}>
            {questions.map((valueQuestion, index) => (
              <ListItem key={valueQuestion} disableGutters>
                <ListItemText primary={`${valueQuestion}`} />
                <RadioGroup row aria-label="options" name="row-radio-buttons-group" onChange={handleChange}>
                    <FormControlLabel value="nada" control={<Radio color="primary"/>} label="Nada" />
                    <FormControlLabel value="poco" control={<Radio color="primary"/>} label="Un poco" />
                    <FormControlLabel value="moderado" control={<Radio color="primary"/>} label="Moderado" />
                    <FormControlLabel value="bastante" control={<Radio color="primary"/>} label="bastante"/>
                </RadioGroup>
              </ListItem>
            ))}
            <Button variant="contained" onClick={handleClick}>Aceptar</Button>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default PreQuestionnaire;
