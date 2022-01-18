import React from "react";
import { List, ListItem, ListItemText, Container, Divider,Typography, Grid } from '@mui/material'
import styles from "../../styles/QuestionairePre.module.scss";
import RadioGroupQuestionnaire from "./RadioGroupQuestionnaire";
import questions from "./questions";

const ItemsQuestionnaire = () => {
  return (
    <>
    <Container className={styles.containerItems}>
      <List sx={{ width: "100%", maxWidth: 760, bgcolor: "background.paper" }} className={styles.items}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
            {questions.map((value) => (
            <ListItem key={value} disableGutters >
                <Grid item container xs={12} sm={12} md={12} lg={12} xl={6} >
                    <ListItemText primary={value} sx={{fontWeight:'bold'}} disableTypography/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6} >
                    <RadioGroupQuestionnaire />
                </Grid>
            </ListItem>
            ))}
        </Grid>
      </List>
    </Container>
    </>
  );
};

export default ItemsQuestionnaire;
