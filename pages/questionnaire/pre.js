import { Grid } from '@mui/material'
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import PreQuestionnaire from '../../modules/questionnaires/PreQuestionnaire'
import styles from "../../styles/QuestionairePre.module.scss";

export default function QuestionairePre() {
    return (
        <PrivateLayout titlePage="Cuestionario Previo a las Pruebas Visuales">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <PreQuestionnaire />
            </Grid>
        </PrivateLayout>
    )
}
