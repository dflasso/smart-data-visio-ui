import { Grid } from '@mui/material'
import React from 'react'
import LangTaskAnalysis from './LangTaskAnalysis';
import LangTaskDetails from './LangTaskDetails';
import LangTaskOptions from './LangTaskOptions';
import StateTaskLang from './stateTaskLang';

//styles
import styles from "../../../styles/LangTasks.module.scss";
import useTestLangCards from '../../../hooks/useTestLangCards';

export default function TableAllLangCardsRow({ row = {} }) {
    const {
        addResultCard,
        checkStateTask
    } = useTestLangCards()

    let description = ""

    if (Array.isArray(row.items_card)) {

        row.items_card.forEach(
            item => {
                description = description + item.description_spanish + ",  "
            }
        );
    }

    const handleSaveAnswers = (answers) => {
        addResultCard(answers)
    }

    const stateTask = checkStateTask(row.id)

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.RowCard}  >
            <Grid item xs={7} sm={4} md={3} lg={2} xl={2}  >
                {row.name_test_spanish}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} md={5} lg={4} xl={4} >
                {description}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }} lg={1} xl={1} >
                <StateTaskLang state={stateTask} />
            </Grid>
            <Grid container sx={{ display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none' } }} xs={5} alignItems="center" justifyContent="center" direction="row" >
                <Grid item xs={4} >
                    <LangTaskOptions
                        optionsKnow={row.items_card}
                        onSave={handleSaveAnswers}
                        idTask={row.id}
                        descriptionTask={row.name_test_spanish}
                        purpose={row.name_test_spanish}
                    />
                </Grid>
                <Grid item xs={4} >
                    <LangTaskDetails id_test={row.id} />
                </Grid>
                <Grid item xs={4} >
                    <LangTaskAnalysis id_test={row.id} />
                </Grid>
            </Grid>
            <Grid container sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'flex', xs: 'flex' } }} xs={5} alignItems="center" justifyContent="center" direction="row" >
                <Grid item xs={4} >
                    <LangTaskOptions
                        typeBtn="icon"
                        optionsKnow={row.items_card}
                        onSave={handleSaveAnswers}
                        idTask={row.id}
                        descriptionTask={row.name_test_spanish}
                        purpose={row.name_test_spanish}
                    />
                </Grid>
                <Grid item xs={4} >
                    <LangTaskDetails id_test={row.id} typeBtn="icon" />
                </Grid>
                <Grid item xs={4} >
                    <LangTaskAnalysis id_test={row.id} typeBtn="icon" />
                </Grid>
            </Grid>
        </Grid>
    )
}
