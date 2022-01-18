import { Search } from '@mui/icons-material'
import { Button, Card, FormHelperText, Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import styles from "../../styles/TaditionalPage.module.scss";

export default function TraditionalsFormSearch() {
    return (
        <Grid item xs={12} md={11} lg={11} container alignItems="center" justifyContent="center" >
            <Card className={styles.cardFilter}>
                <Grid item xs={12} md={11} lg={11} container alignContent="center" alignSelf="center" spacing={1} justifyContent="center">

                    <Grid item xs={12} md={10} lg={8}>
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
                        <FormHelperText>Puede filtrar por nombre, código o descripción. </FormHelperText>
                    </Grid>
                    <Grid item xs={12} md={1} lg={1} textAlign="center">
                        <Button variant="contained" >Filtrar</Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}
