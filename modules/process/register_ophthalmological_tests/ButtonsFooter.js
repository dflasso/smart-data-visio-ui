import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import styles from "../../../styles/RegisterOphthalmologicalTests.module.scss";

export default function ButtonsFooter({ idTest }) {
    return (
        <Card className={styles.cardContainer}>
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={3} lg={3}>
                    <Button variant="contained" fullWidth color="success">
                        Guardar
                </Button>
                </Grid>
                <Grid item xs={11} md={3} lg={3} >
                    <Button variant="contained" fullWidth color="info">
                        Reporte
                </Button>
                </Grid>
                <Grid item xs={11} md={3} lg={3} >
                    <Button variant="outlined" fullWidth color="error">
                        Limpiar Datos
                </Button>
                </Grid>
                <Grid item xs={11} md={3} lg={3} >
                    <Button variant="contained" fullWidth color="error">
                        Cancelar
                </Button>
                </Grid>
            </Grid>
        </Card>
    )
}
