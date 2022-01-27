// React js
import React from 'react'
// Material ui
import { Button, Card, Grid } from '@mui/material'
import { AddBox } from '@mui/icons-material'
//Next 
import { useRouter } from 'next/router'
// Local styles
import styles from "../../../styles/EvalPilots.module.scss"
// Custom hooks
import useLayout from '../../../hooks/useLayout'



export default function ContainerActions() {
    const router = useRouter()
    const { updateFlagShowBackdrop } = useLayout()

    const handleCreateProcess = () => {
        updateFlagShowBackdrop({ show: true })
        router.push("/patient/register/from_process_ophthalmological")
            .finally(() => updateFlagShowBackdrop({ show: false }))
    }

    return (
        <Card className={styles.containerActions}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={styles.mainContent} >

                <Grid item xs={6} sm={5} md={4} lg={3} xl={2} >
                    <Button variant="contained" onClick={handleCreateProcess} startIcon={<AddBox />} > Registrar Paciente </Button>
                </Grid>
                <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
                    <Button variant="outlined"  > Reporte Lote Pacientes </Button>
                </Grid>

            </Grid>
        </Card >
    )
}
