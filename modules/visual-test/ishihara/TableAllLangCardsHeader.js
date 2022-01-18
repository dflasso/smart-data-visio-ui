import { Grid } from '@mui/material'
import React from 'react'
import styles from "../../../styles/EvalPilots.module.scss";

export default function TableAllLangCardsHeader() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center"  >
            <Grid item xs={7} sm={4} md={3} lg={2} xl={2} className={styles.headerTable}>
                Núm. Lámina
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} md={5} lg={4} xl={4} className={styles.headerTable}>
                Objetos
        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }} lg={1} xl={1} className={styles.headerTable}>
                Estado
        </Grid>
            <Grid item sx={{ display: { xs: 'block' } }} xs={5} className={styles.headerTable}>
                Acciones
        </Grid>
        </Grid>
    )
}
