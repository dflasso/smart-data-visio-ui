import {
  Grid, Typography, Button, List, ListItem, ListItemText,
  Radio, RadioGroup, FormControlLabel, Card, Divider
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/QuestionairePre.module.scss";

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
    <Grid item xs={12} md={10} lg={8}>
      <Card>
        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <List sx={{ width: "100%", maxWidth: 610, bgcolor: "background.paper" }}>
            {questions.map((valueQuestion) => (
              <ListItem key={valueQuestion} disableGutters>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={4} lg={4} className={styles.questionLabel} >
                    <ListItemText primary={`${valueQuestion}`} />
                  </Grid>
                  <Grid container item md={8} lg={8} sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} spacing={1}>
                    <RadioGroup row aria-label="options" name="row-radio-buttons-group" onChange={handleChange}>
                      <FormControlLabel value="nada" control={<Radio color="primary" />} label="Nada" />
                      <FormControlLabel value="poco" control={<Radio color="primary" />} label="Un poco" />
                      <FormControlLabel value="moderado" control={<Radio color="primary" />} label="Moderado" />
                      <FormControlLabel value="bastante" control={<Radio color="primary" />} label="bastante" />
                    </RadioGroup>
                  </Grid>
                  <Grid container xs={10} className={styles.questionContainerOptions} direction="column" sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block' } }} spacing={1} >
                    <RadioGroup aria-label="options" name="row-radio-buttons-group" onChange={handleChange}>
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel value="nada" control={<Radio color="primary" />} label="Nada" />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel value="poco" control={<Radio color="primary" />} label="Un poco" />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel value="moderado" control={<Radio color="primary" />} label="Moderado" />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel value="bastante" control={<Radio color="primary" />} label="bastante" />
                      </Grid>
                    </RadioGroup>
                  </Grid>
                </Grid>
                <Divider />
              </ListItem>
            ))}
            <Button variant="contained" onClick={handleClick}>Aceptar</Button>
          </List>
        </Grid>
      </Card>
    </Grid>
  );
};

export default PreQuestionnaire;