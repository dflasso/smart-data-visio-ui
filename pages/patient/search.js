
// React.js
import React from 'react'

// Materal UI
import { Grid } from '@mui/material';

// Local Components
import PrivateLayout from '../../layouts/private_layout'
import styles from "../../styles/RegisterPatient.module.scss";
// Local Providers Data
import { providers } from "../../providers";
//Context 
import { PatientsProvider } from "../../contexts/PatientSearchContext";
import ContentSearchPatient from '../../modules/patient/ContentSearchPatient';

const backend = providers.backend

export default function SearchPatient({ patients }) {

    return (
        <PrivateLayout titlePage="Buscar Paciente">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <PatientsProvider>
                    <ContentSearchPatient patients={patients} />
                </PatientsProvider>
            </Grid>
        </PrivateLayout>
    )
}

export async function getServerSideProps(context) {
    const patients = await backend.patients.find_all()
    return {
        props: {
            patients
        }, // will be passed to the page component as props
    }
}