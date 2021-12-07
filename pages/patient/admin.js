import { Grid } from '@mui/material'
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import styles from "../../styles/ContentHome.module.scss";

export default function Home() {
    return (
        <PrivateLayout titlePage="Inicio">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >

            </Grid>
        </PrivateLayout>
    )
}
