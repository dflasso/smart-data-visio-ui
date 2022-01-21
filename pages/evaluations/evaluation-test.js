// React
import React from 'react'
// Material ui
import { Button, Grid } from '@mui/material'
//next 
import { useRouter } from 'next/router'
// Local components
import HeaderForms from '../../components/HeaderForms'
import PrivateLayout from '../../layouts/private_layout'
import styles from "../../styles/Evaluations.module.scss";
import StepperEvaluation from '../../modules/evaluation/StepperEvaluation'

export default function Evaluation() {
    const router = useRouter()

    const handleOnClick = () => {
        router.back()
    }

    return (
        <PrivateLayout titlePage="Evaluación de la tarea realizada">
            <Grid container direction="row" justifyContent="center" className={styles.mainContent} >
                <HeaderForms title="Completa las diferentes evaluaciones respecto a la tarea" />
                <StepperEvaluation />
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleOnClick} > Guardar</Button>
                </Grid>
            </Grid>
        </PrivateLayout>
    )
}
