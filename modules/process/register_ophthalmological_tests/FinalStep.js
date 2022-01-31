import { ArrowBack, ArrowForward, Article } from '@mui/icons-material';
import { Alert, AlertTitle, Button, Grid } from '@mui/material';
import React from 'react';
import useTestOphthalmologicalVirtualTask from '../../../hooks/useTestOphthalmologicalVirtualTask';
import { useRouter } from 'next/router'
//Styles
import styles from "../../../styles/VirtualTaskStep.module.scss";

export default function FinalStep() {
    const router = useRouter()
    const { handleBackTest } = useTestOphthalmologicalVirtualTask({ nextTab: "1", previousTab: "7" })

    const handleCreateReport = () => {
        window.open("/template_Informe_Resultados.pdf", "_blank")
    }

    const handleFinished = () => {
        router.push('/process/eval-pilots')
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} className={styles.containerStep}>

            <Grid item xs={12} >
                <Alert severity="info" >
                    <AlertTitle>Resultados del Proceso</AlertTitle>
                </Alert>
            </Grid>
            <Grid item xs={4}>
                <Button startIcon={<Article />} variant="contained" onClick={handleCreateReport} > Obtener Reporte </Button>
            </Grid>
            <Grid item xs={4}>
                <Button startIcon={<ArrowBack />} variant="contained" color="inherit" onClick={handleBackTest}  >Regresar </Button>
            </Grid>
            <Grid item xs={4}>
                <Button startIcon={<ArrowForward />} variant="contained" color="inherit" onClick={handleFinished}  > Finalizar </Button>
            </Grid>
        </Grid>);
}
