import { Grid } from '@mui/material'
import React from 'react'
import CardLogo from './CardLogo'
import styles from "../../styles/ContentHome.module.scss";

export default function ContentHome() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
            <CardLogo />
        </Grid>
    )
}
