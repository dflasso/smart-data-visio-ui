import { Grid } from "@mui/material";
import React from "react";
import PrivateLayout from "../../layouts/private_layout";
import HeaderQuestionnaire from "../../modules/questionnaires/HeaderQuestionnaire";
import ItemsQuestionnaire from "../../modules/questionnaires/ItemsQuestionnaire";
import styles from "../../styles/QuestionairePre.module.scss";

const QuestionairePost = () => {
  return (
    <>
      <PrivateLayout titlePage="Cuestionario Posterior a las Pruebas Visuales">
        <Grid container direction="row" justifyContent="center" className={styles.mainContent}>
          <HeaderQuestionnaire title="Completar después de hacer la tarea" />
          {/*<PreQuestionnaire />*/}
          <ItemsQuestionnaire />
        </Grid>
      </PrivateLayout>
    </>
  );
};

export default QuestionairePost;
