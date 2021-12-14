import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import GridAllProcess from '../../modules/process/GridAllProcess';
import StepsProcess from '../../modules/process/StepsProcess';
import { getStepsProcess } from '../../providers/ProcessData_Provider';
import styles from "../../styles/Page.module.scss";

export default function EvalPilots({ id, name, description, imageUrl, steps, sumaryProcess }) {
    const process = { id, name, description, imageUrl, url: "/process" }
    return (
        <PrivateLayout titlePage="Proceso de Selección a pilotos de las FF. AA.">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} spacing={2} >
                <GridAllProcess process={[process]} redirect={false} />
                <StepsProcess steps={steps} sumaryProcess={sumaryProcess} />
            </Grid>
        </PrivateLayout>
    )
}


export async function getServerSideProps(context) {

    const processDetail = await getStepsProcess("1", () => { });
    const { id, name, description, imageUrl, steps } = processDetail
    const sumaryProcess = {
        currentsStep: 0
    }
    return {
        props: {
            id, name, description, imageUrl, steps,
            sumaryProcess
        }, // will be passed to the page component as props
    }
}
