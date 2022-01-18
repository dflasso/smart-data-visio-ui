import React from 'react'
import { TabPanel } from '@mui/lab'
import { Grid } from '@mui/material'
import PatientSelected from '../../patient/PatientSelected'
import styles from "../../../styles/LangTasks.module.scss";
import LtsResultCardsLang from './LtsResultCardsLang';

export default function TabSummaryTestLang() {
    return (
        <TabPanel value="1" className={styles.summaryTestLangContainre} >
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} >
                <PatientSelected />
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} className={styles.summaryTestLangCardResultContainer} >
                <LtsResultCardsLang />
            </Grid>
        </TabPanel>
    )
}
