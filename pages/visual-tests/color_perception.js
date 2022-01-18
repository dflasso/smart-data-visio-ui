import { Grid } from '@mui/material'
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import VirtualTask from '../../modules/virtual_task';
import styles from "../../styles/StereoscopicVision.module.scss";

export default function StereoscopicVision() {
    return (
        <PrivateLayout titlePage="Percepción visual de color">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.continer} spacing={2} >
                <VirtualTask />
            </Grid>
        </PrivateLayout>
    )
}
