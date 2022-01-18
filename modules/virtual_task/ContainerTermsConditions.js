// React js
import React from 'react'

//Material ui
import { Button, Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'

//Local Components
import CardNavHorizontal from '../../components/CardNavHorizontal'


export default function ContainerTermsConditions() {
    return (
        <CardNavHorizontal
            iconAvatarHeader="info"
            title="Consentimiento Informado"
        >
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={6} lg={3}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Acepto los términos y condiciones." />
                    </FormGroup>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth>
                        Descargar acta de consentimiento
                    </Button>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth >
                        Subir archivo firmado
                    </Button>
                </Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
