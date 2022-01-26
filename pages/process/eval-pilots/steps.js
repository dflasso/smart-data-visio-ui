import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../../layouts/private_layout'
import RegisterOphthalmologicalTests from "../../../modules/process/register_ophthalmological_tests"
import styles from "../../../styles/Page.module.scss";

export default function EvalPilots({ idTest, patientNumDocument }) {
    return (
        <PrivateLayout titlePage="Pruebas oftalmológicas">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} spacing={2} >
                <RegisterOphthalmologicalTests idTest={idTest} patientNumDocument={patientNumDocument} />
            </Grid>
        </PrivateLayout>
    )
}


export async function getServerSideProps(context) {
    let idTest = ''
    let patientNumDocument = ''
    if (typeof context.query !== "undefined" && typeof context.query === "object") {
        if (typeof context.query.id !== "undefined" && context.query.id !== null) {
            idTest = context.query.id
        }
        if (typeof context.query.patient_id !== "undefined" && context.query.patient_id !== null) {
            patientNumDocument = context.query.patient_id
        }
    }
    return {
        props: {
            idTest,
            patientNumDocument
        }, // will be passed to the page component as props
    }
}
