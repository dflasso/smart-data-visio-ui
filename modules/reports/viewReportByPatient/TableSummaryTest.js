import { Grid } from '@mui/material'
import React from 'react'
import CardNavHorizontal from '../../../components/CardNavHorizontal'
import styles from "../../../styles/DetailTestReport.module.scss";

export default function TableSummaryTest({ icon = "list", title = "", langPorcentaje = 0, ishiharaPorcentaje = 0, deepPorcentaje = 0, colorPorcentaje = 0, totalPorcentaje = 0 }) {
    return (
        <CardNavHorizontal iconAvatarHeader={icon} title={title}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid item xs={6} className={styles.TbTestCellDescription}>
                    .
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellValue} >
                    Porcentaje de Aciertos
                </Grid>

                <Grid item xs={6} className={styles.TbTestCellDescription} marginTop={2} >
                    <b> Pruebas Clásicas</b>
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellValue} marginTop={2}>
                    -
                </Grid>

                <Grid item xs={6} className={styles.TbTestCellDescription}>
                    Lang
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellValue}>
                    {langPorcentaje} %
                </Grid>

                <Grid item xs={6} className={styles.TbTestCellDescription}>
                    Ishihara
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellValue} >
                    {ishiharaPorcentaje} %
                </Grid>


                <Grid item xs={6} className={styles.TbTestCellDescription} marginTop={2}  >
                    <b> Pruebas Virtuales</b>
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellValue} marginTop={2} >-
                </Grid>

                <Grid item xs={6} className={styles.TbTestCellDescription} >
                    Percepción de profundidad
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellValue}>
                    {deepPorcentaje} %
                </Grid>

                <Grid item xs={6} className={styles.TbTestCellDescription}>
                    Percepción de color
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellValue}>
                    {colorPorcentaje} %
                </Grid>

                <Grid item xs={6} className={styles.TbTestCellTotalDescription} marginTop={2}  >
                    <b>Total</b>
                </Grid>
                <Grid item xs={3} className={styles.TbTestCellTotalValue} marginTop={2}  >
                    {totalPorcentaje} %
                </Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
