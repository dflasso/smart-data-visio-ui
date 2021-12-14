import { Search } from '@mui/icons-material'
import { Button, Card, CardContent, FormHelperText, Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'

export default function FormFilterPatients() {
    return (
        <Grid item xs={12} md={11} lg={11}>
            <Card>
                <Grid container alignContent="center" alignSelf="center" spacing={1} justifyContent="center">

                    <Grid item xs={12} md={6} lg={8}>
                        <TextField
                            size="small"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormHelperText>Puede filtrar por nombre, correo electrónico, Núm. Identificación. </FormHelperText>
                    </Grid>
                    <Grid item xs={12} md={1} lg={1} textAlign="center">
                        <Button variant="contained" >Filtrar</Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}
