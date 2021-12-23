import { Grid } from '@mui/material'
import React from 'react'
import { TestLangProvider } from '../../contexts/TestLangContext';
import PrivateLayout from '../../layouts/private_layout'
import LangTasks from '../../modules/visual-test/lang/LangTasks'
import styles from "../../styles/TaditionalPage.module.scss";

export default function TaditionalPage() {
    return (
        <PrivateLayout titlePage="Prueba Visual LANG">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.continer} spacing={2} >
                <TestLangProvider>
                    <LangTasks />
                </TestLangProvider>
            </Grid>
        </PrivateLayout>
    )
}
