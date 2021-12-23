import React from "react";
import { Grid, Container, Typography, Divider } from "@mui/material";
import Subtitle from "../../components/Subtitle";
import styles from "../../styles/QuestionairePre.module.scss";

const HeaderQuestionnaire = ({title="Completar antes o después de hacer la tarea"}) => {
  return (
    <>
      <Container className={styles.container}>
        <Grid item>
          <Typography variant="subtitle1" align="center"><strong>{title}</strong></Typography> <br />
          <Divider />
          <Subtitle title="Rodea la opción que creas que se ajusta más a cómo te sientes ahora mismo"></Subtitle>
        </Grid>
      </Container>
    </>
  );
};

export default HeaderQuestionnaire;
