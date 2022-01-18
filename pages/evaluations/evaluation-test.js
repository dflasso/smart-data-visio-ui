import { Grid } from '@mui/material'
import React from 'react'
import HeaderForms from '../../components/HeaderForms'
import PrivateLayout from '../../layouts/private_layout'
import styles from "../../styles/Evaluations.module.scss";
import StepperEvaluation from '../../modules/evaluation/StepperEvaluation'

export default function Evaluation() {
    return (
        <PrivateLayout titlePage="Evaluación de la tarea realizada">
            <Grid container direction="row" justifyContent="center" className={styles.mainContent} >
                <HeaderForms title="Completa las diferentes evaluaciones respecto a la tarea" />
                <StepperEvaluation />
            </Grid>
        </PrivateLayout>
    )
}
