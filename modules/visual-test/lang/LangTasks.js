import { Grid } from '@mui/material'
import { TabContext } from '@mui/lab'
import React from 'react'
import styles from "../../../styles/LangTasks.module.scss";
import useTestLangTabs from '../../../hooks/useTestLangTabs';
import TabSummaryTestLang from './TabSummaryTestLang';
import TabSelecctionCardLang from './TabSelecctionCardLang';
import NavigationTestLang from './NavigationTestLang';

export default function LangTasks() {
    const { state } = useTestLangTabs()
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} spacing={2}>
            <TabContext value={state.currentTap} >
                <NavigationTestLang />
                <TabSummaryTestLang />
                <TabSelecctionCardLang />
            </TabContext>
        </Grid>
    )
}
