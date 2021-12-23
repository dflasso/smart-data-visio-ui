import { Grid } from '@mui/material'
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import HeaderQuestionnaire from '../../modules/questionnaires/HeaderQuestionnaire';
import ItemsQuestionnaire from '../../modules/questionnaires/ItemsQuestionnaire';
import PreQuestionnaire from '../../modules/questionnaires/PreQuestionnaire'
import RadioGroupQuestionnaire from '../../modules/questionnaires/RadioGroupQuestionnaire';
import styles from "../../styles/QuestionairePre.module.scss";



export default function QuestionairePre() {
    return (
        <PrivateLayout titlePage="Cuestionario Previo a las Pruebas Visuales">
            <Grid container direction="row" justifyContent="center" className={styles.mainContent} >
                <HeaderQuestionnaire title="Completar antes de hacer la tarea"/>
                {/*<PreQuestionnaire />*/}
                <ItemsQuestionnaire />
            </Grid>
        </PrivateLayout>
    )
}