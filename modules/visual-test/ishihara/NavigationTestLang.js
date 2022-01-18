import { Search, Summarize } from '@mui/icons-material'
import { TabList } from '@mui/lab'
import { Grid, Tab } from '@mui/material'
import React from 'react'
import useTestLangTabs from '../../../hooks/useTestLangTabs';
import styles from "../../../styles/ContentPatient.module.scss";


export default function NavigationTestLang() {
    const { handleChangeTap } = useTestLangTabs()
    return (
        <>
            <Grid item md={12} lg={12} className={styles.containerNav} sx={{ display: { lg: 'block', xs: 'none', sm: 'none', md: 'block' } }} >

                <TabList onChange={handleChangeTap} aria-label="navigator test lang" centered>
                    <Tab icon={<Summarize />} iconPosition="end" label="Resumen" value="1" wrapped />
                    <Tab icon={<Search />} iconPosition="end" label="Tarjetas" value="2" wrapped />
                </TabList>

            </Grid>

            <Grid item xs={12} className={styles.containerNav} sx={{ display: { lg: 'none', xs: 'block', sm: 'block', md: 'none' } }} >

                <TabList onChange={handleChangeTap} aria-label="navigator test lang" centered>
                    <Tab icon={<Summarize />} value="1" />
                    <Tab icon={<Search />} value="2" />
                </TabList>

            </Grid>
        </>
    )
}
