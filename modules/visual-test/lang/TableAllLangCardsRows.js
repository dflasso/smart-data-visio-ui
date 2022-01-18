import { Grid } from '@mui/material'
import React from 'react'
import LangTaskOptions from './LangTaskOptions';
import StateTaskLang from './stateTaskLang';


export default function TableAllLangCardsRow({ row = {} }) {
    let description = ""

    if (Array.isArray(row.items_card)) {

        row.items_card.forEach(
            item => {
                description = description + item.description_spanish + ",  "
            }
        );
    }

    const handleSaveAnswers = (answers) => {
        console.log(answers)
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center"   >
            <Grid item xs={7} sm={4} md={3} lg={2} xl={2}  >
                {row.name_test_spanish}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} md={5} lg={4} xl={4} >
                {description}
            </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }} lg={1} xl={1} >
                <StateTaskLang state="Pendiente" />
            </Grid>
            <Grid item sx={{ display: { xs: 'block' } }} xs={5} >
                <LangTaskOptions
                    optionsKnow={row.items_card}
                    onSave={handleSaveAnswers}
                    idTask={row.id}
                    descriptionTask={row.name_test_spanish}
                    purpose={row.name_test_spanish}
                />
            </Grid>
        </Grid>
    )
}
