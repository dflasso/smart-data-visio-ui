import React from "react";
import { List, ListItem, ListItemText, Container, Grid } from '@mui/material'
import styles from "../../styles/QuestionairePre.module.scss";
import RadioGroupQuestionnaire from "./RadioGroupQuestionnaire";


const ItemsQuestionnaire = ({ questions = [], onChange }) => {

  const handleOnChangeQuestions = (question) => {
    if (typeof onChange === "function") {
      onChange(question)
    }
  }

  return (
    <>
      <Container className={styles.containerItems}>
        <List sx={{ width: "100%", maxWidth: "95%", minWidth: '80%', bgcolor: "background.paper" }} className={styles.items}>


          {questions.map((question) => (

            <ListItem key={question.id_question} disableGutters component="div" >
              <Grid container direction="row" alignItems="center" justifyContent="center"  >
                <Grid item xs={12} sm={12} md={4} lg={6} xl={6} marginBottom={1} >
                  <ListItemText primary={question.statement} sx={{ fontWeight: 'bold' }} disableTypography />
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={6} xl={6} >
                  <RadioGroupQuestionnaire
                    answers={question.answers}
                    statement={question.statement}
                    id_question={question.id_question}
                    answerMaxValue={question.answerMaxValue}
                    answerMinValue={question.answerMinValue}
                    onChange={handleOnChangeQuestions}
                  />
                </Grid>
              </Grid>
            </ListItem>
          ))}

        </List>
      </Container>
    </>
  );
};

export default ItemsQuestionnaire;
