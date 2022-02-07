import { Alert, Grid } from '@mui/material';
import React from 'react';

export default function HeaderEvaluation() {
    return (
        <Grid container justifyContent="center" alignContent="center" marginTop={10} >
            <Grid item xs={12} >
                <Alert severity="info">
                    Cuestionario respecto a la usabilidad del sistema
                </Alert>
            </Grid>
        </Grid>
    );
}
