import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../../layouts/private_layout'
import RegisterOphthalmologicalTests from "../../../modules/process/register_ophthalmological_tests"
import styles from "../../../styles/Page.module.scss";

export default function EvalPilots({ idTest }) {

    return (
        <PrivateLayout titlePage="Ophthalmological tests">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} spacing={2} >
                <RegisterOphthalmologicalTests idTest={idTest} />
            </Grid>
        </PrivateLayout>
    )
}


export async function getServerSideProps(context) {
    let idTest = '0'
    if (typeof context.query !== "undefined" && typeof context.query !== "object") {
        if (typeof context.query.id !== "undefined" && context.query.id !== null) {
            idTest = context.query.id
        }
    }
    return {
        props: {
            idTest
        }, // will be passed to the page component as props
    }
}
