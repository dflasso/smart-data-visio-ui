import { Grid } from '@mui/material'
import React from 'react'
import CardNavHorizontal from '../../../components/CardNavHorizontal'

export default function DetailTest({ title = "", icon = "equalizer", hits = 0, errors = 0, procentajeDefined = 0, globalPorcentaje }) {
    return (
        <CardNavHorizontal iconAvatarHeader={icon} title={title}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item xs={6} lg={3} > <b>Aciertos:</b> {hits} </Grid>
                <Grid item xs={6} lg={3}> <b>Errores:</b> {errors} </Grid>
                <Grid item xs={12}> <i>Porcentaje obtenido en la prueba:  </i>  {"  " + Number(hits * 100 / (hits + errors)).toFixed(2)} % </Grid>
                <Grid item xs={12}> <i>Porcentaje equivalente sobre {procentajeDefined}%:</i> {globalPorcentaje} %</Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
