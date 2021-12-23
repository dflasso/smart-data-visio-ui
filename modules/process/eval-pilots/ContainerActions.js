import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import styles from "../../../styles/EvalPilots.module.scss"
import { useRouter } from 'next/router'

export default function ContainerActions() {
    const router = useRouter()

    const handleCreateProcess = () => router.push("/process/eval-pilots/steps")

    return (
        <Card className={styles.containerActions}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={styles.mainContent} >

                <Grid item xs={6} sm={5} md={4} lg={3} xl={2} >
                    <Button variant="outlined" onClick={handleCreateProcess} > Nuevo Proceso </Button>
                </Grid>
                <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
                    <Button variant="outlined" > Reporte Lote Pacientes </Button>
                </Grid>

            </Grid>
        </Card >
    )
}
