import { Grid } from '@mui/material'
import React from 'react'
import styles from "../../../styles/LangTasks.module.scss"

export default function HeaderTableLtsResultCardLang() {
    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start"  >
            <Grid item xs={2} md={1} lg={1} xl={1} textAlign="center" className={styles.summaryTestLangTableHeader} >
                #
                        </Grid>
            <Grid item xs={6} md={3} lg={2} xl={1} className={styles.summaryTestLangTableHeader}>
                Lamina
                        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
                md={3} lg={2} xl={2} className={styles.summaryTestLangTableHeader}>
                Fecha y hora Inicio
                        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
                md={3} lg={2} xl={2} className={styles.summaryTestLangTableHeader}>
                Fecha y hora Fin
                        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}
                lg={3} xl={4} className={styles.summaryTestLangTableHeader}>
                Observaciones
                        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
                lg={1} xl={1} textAlign="center" className={styles.summaryTestLangTableHeader}>
                Más detalles
                        </Grid>
            <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
                lg={1} xl={1} textAlign="center" className={styles.summaryTestLangTableHeader}>
                Eliminar
                        </Grid>
            <Grid item sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}
                sm={4} xs={4} textAlign="center" className={styles.summaryTestLangTableHeader}>
                Acciones
                        </Grid>
        </Grid>
    )
}
