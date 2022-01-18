import { Grid } from '@mui/material';
import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import TraditionalsContent from '../../modules/visual-test/TraditionalsContent';
import styles from "../../styles/TaditionalPage.module.scss";

export default function HomeTraditionals() {
    return (
        <PrivateLayout titlePage="Pruebas Visuales Tradicionales">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.continer} spacing={2} >
                <TraditionalsContent />
            </Grid>
        </PrivateLayout>
    )
}
