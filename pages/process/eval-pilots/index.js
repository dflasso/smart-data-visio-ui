// React 
import React from 'react'
// Material UI
import { Grid } from '@mui/material';

// Local Components
import PrivateLayout from '../../../layouts/private_layout'
import TableAllProcessPilots from '../../../modules/process/eval-pilots/TableAllProcessPilots';
import ContainerActions from '../../../modules/process/eval-pilots/ContainerActions';
// Local Providers Data
import { providers } from "../../../providers";
// Styles
import styles from "../../../styles/Page.module.scss"

const backend = providers.backend

export default function Process({ usersWithTestsOphthalmological }) {
    return (
        <PrivateLayout titlePage="Pacientes">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <ContainerActions />
                <TableAllProcessPilots rows={usersWithTestsOphthalmological} />
            </Grid>
        </PrivateLayout>
    )
}

export async function getServerSideProps(context) {
    const usersWithTestsOphthalmological = await backend.patients.find_all()
    return {
        props: {
            usersWithTestsOphthalmological
        }, // will be passed to the page component as props
    }
}

