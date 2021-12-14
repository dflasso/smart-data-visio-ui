import { TabPanel } from '@mui/lab'
import { Grid, Pagination } from '@mui/material'
import React from 'react'
import FormFilterPatients from './FormFilterPatients'
import CardDetailPatiend from "./CardDetailPatiend";
import styles from "../../styles/ContentPatient.module.scss";

export default function SearchPatients() {
    return (
        <TabPanel value="1" className={styles.tabContainer} >
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <FormFilterPatients />
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <CardDetailPatiend />
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.containerPagination}>
                <Pagination count={10} variant="outlined" color="primary" shape="rounded" size="small" />
            </Grid>
        </TabPanel>
    )
}
