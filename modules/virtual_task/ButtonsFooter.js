import { Button, Card, Grid } from '@mui/material'

import styles from "../../styles/RegisterOphthalmologicalTests.module.scss";

//React
import React from 'react'

//Next js
import { useRouter } from 'next/router'

export default function ButtonsFooter() {
    const router = useRouter()

    const handleSave = () => {
        router.push('/process/eval-pilots/steps')
    }

    return (
        <Card className={styles.cardContainer}>
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={3} lg={3}>
                    <Button variant="contained" fullWidth color="success" onClick={handleSave}>
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
