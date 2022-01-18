import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../../layouts/private_layout'
import FormRegisterPatient from '../../../modules/patient/FormRegisterPatient';

import styles from "../../../styles/RegisterPatient.module.scss";

export default function RegisterPatient() {
    return (
        <PrivateLayout titlePage="Inicio">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <FormRegisterPatient />
            </Grid>
        </PrivateLayout>
    )
}
