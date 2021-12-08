import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import GridAllProcess from '../../modules/process/GridAllProcess';
import StepsProcess from '../../modules/process/StepsProcess';
import { getStepsProcess } from '../../providers/ProcessData_Provider';
import styles from "../../styles/Page.module.scss";

export default function EvalPilots({ id, name, description, imageUrl, steps }) {
    const process = { id, name, description, imageUrl, url: "/process" }
    return (
        <PrivateLayout titlePage="Proceso de Selección a pilotos de las FF. AA.">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <GridAllProcess process={[process]} redirect={false} />
                <StepsProcess steps={steps} />
            </Grid>
        </PrivateLayout>
    )
}


export async function getServerSideProps(context) {

    const processDetail = await getStepsProcess("1", () => { });
    const { id, name, description, imageUrl, steps } = processDetail
    return {
        props: {
            id, name, description, imageUrl, steps
        }, // will be passed to the page component as props
    }
}
