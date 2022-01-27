// React js
import React from 'react'

//Material ui
import { Button, Grid } from '@mui/material'

//Local Components
import CardNavHorizontal from '../../components/CardNavHorizontal'


export default function ContainerVirtualTask() {
    return (
        <CardNavHorizontal
            iconAvatarHeader="phonelink"
            title="Tarea Virtual"
        >
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth component="label">
                        Subir archivo con los resultados
                        <input type="file" hidden />
                    </Button>
                </Grid>
                {/* <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth >
                        Verificar Información Cargada
                    </Button>
                </Grid> */}
            </Grid>
        </CardNavHorizontal>
    )
}
