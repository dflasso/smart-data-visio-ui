import { Grid } from '@mui/material'
import { TabContext } from '@mui/lab';
import React from 'react'
import useTabsPatients from '../../hooks/useTabsPatients'
import NavigationPatients from './NavigationPatients'
import SearchPatients from './TabSearchPatients';
import TabRegisterPatient from './TabRegisterPatient';
import TabEditPatient from './TabEditPatient';
import styles from "../../styles/ContentPatient.module.scss";
import FloatingActionsPatiens from './FloatingActionsPatiens';

export default function ContentPatient() {
    const { state } = useTabsPatients()

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
            <TabContext value={state.currentTap} >
                <NavigationPatients />
                <SearchPatients />
                <TabRegisterPatient />
                <TabEditPatient />
            </TabContext>
            <FloatingActionsPatiens />
        </Grid>
    )
}
