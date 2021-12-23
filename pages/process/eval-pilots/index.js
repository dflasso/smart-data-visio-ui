import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../../layouts/private_layout'
import styles from "../../../styles/Page.module.scss"
import TableAllProcessPilots from '../../../modules/process/eval-pilots/TableAllProcessPilots';
import ContainerActions from '../../../modules/process/eval-pilots/ContainerActions';

export default function Process() {
    return (
        <PrivateLayout titlePage="Procesos aplicados a los pacientes">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <ContainerActions />
                <TableAllProcessPilots />
            </Grid>
        </PrivateLayout>
    )
}

