import { Grid } from '@mui/material'
import React from 'react'
import styles from "../../styles/TaditionalPage.module.scss";
import LtsTraditionalsTest from './LtsTraditionalsTest';
import TraditionalsFormSearch from './TraditionalsFormSearch';

export default function TraditionalsContent() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} spacing={2}>
            <TraditionalsFormSearch />
            <LtsTraditionalsTest />
        </Grid>
    )
}
