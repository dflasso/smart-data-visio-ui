import { TabPanel } from '@mui/lab'
import { Grid, Pagination } from '@mui/material'
import React from 'react'
import FormFilterPatients from './FormFilterPatients'
import CardDetailPatiend from "./CardDetailPatiend";
import styles from "../../styles/ContentPatient.module.scss";
import HeaderSearchPatiends from './HeaderSearchPatiends';

export default function SearchPatients({ patients }) {
    return (
        <TabPanel value="1" className={styles.tabContainer} >
            {/* <Grid container direction="row" justifyContent="center" alignItems="center" >
                <FormFilterPatients />
            </Grid> */}

            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <HeaderSearchPatiends />
                {
                    Array.isArray(patients) && patients.map(patient => <CardDetailPatiend key={patient.id} patient={patient} />)
                }

            </Grid>

            {/* <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.containerPagination}>
                <Pagination count={10} variant="outlined" color="primary" shape="rounded" size="small" />
            </Grid> */}
        </TabPanel>
    )
}
