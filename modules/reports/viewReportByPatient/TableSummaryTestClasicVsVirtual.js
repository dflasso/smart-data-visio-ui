import { Grid } from '@mui/material'
import React from 'react'
import CardNavHorizontal from '../../../components/CardNavHorizontal'
import styles from "../../../styles/DetailTestReport.module.scss";

export default function TableSummaryTestClasicVsVirtual({ icon = "list", title = "", clasicNameTest = "", virtualNameTest = "", clasicPorcentaje = 0, virtualPorcentaje = 0 }) {
    return (
        <CardNavHorizontal iconAvatarHeader={icon} title={title}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid item xs={6} className={styles.TbTestCellDescription}>
                    .
                </Grid>
                <Grid item xs={4} className={styles.TbTestCellValue} >
                    Porcentaje total de la prueba
                </Grid>


                <Grid item xs={6} className={styles.TbTestCellDescription}>
                    {clasicNameTest}
                </Grid>
                <Grid item xs={4} className={styles.TbTestCellValue}>
                    {clasicPorcentaje} %
                </Grid>

                <Grid item xs={6} className={styles.TbTestCellDescription}>
                    {virtualNameTest}
                </Grid>
                <Grid item xs={4} className={styles.TbTestCellValue} >
                    {virtualPorcentaje} %
                </Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
