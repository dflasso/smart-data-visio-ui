import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import GridAllProcess from '../../modules/process/GridAllProcess';
import styles from "../../styles/Page.module.scss";
import { getAllProcess } from '../../providers/ProcessData_Provider'

export default function Process({ process }) {
    return (
        <PrivateLayout titlePage="Procesos aplicados a los pacientes">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <GridAllProcess process={process} />
            </Grid>
        </PrivateLayout>
    )
}

/**
 * @see https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * @param {*} context 
 * @returns 
 */
export async function getServerSideProps(context) {
    const process = await getAllProcess()
    return {
        props: {
            process
        }, // will be passed to the page component as props
    }
}
