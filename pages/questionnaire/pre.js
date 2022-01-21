// React
import React from 'react'
// material ui
import { Button, Grid } from '@mui/material'
//next 
import { useRouter } from 'next/router'
// Local components
import PrivateLayout from '../../layouts/private_layout'
import HeaderQuestionnaire from '../../modules/questionnaires/HeaderQuestionnaire';
import ItemsQuestionnaire from '../../modules/questionnaires/ItemsQuestionnaire';
import styles from "../../styles/QuestionairePre.module.scss";



export default function QuestionairePre() {
    const router = useRouter()

    const handleOnClick = () => {
        router.back()
    }

    return (
        <PrivateLayout titlePage="Cuestionario Previo a las Pruebas Visuales">
            <Grid container direction="row" justifyContent="center" className={styles.mainContent} >
                <HeaderQuestionnaire title="Completar antes de hacer la tarea" />
                <ItemsQuestionnaire />
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleOnClick} > Guardar</Button>
                </Grid>
            </Grid>
        </PrivateLayout>
    )
}