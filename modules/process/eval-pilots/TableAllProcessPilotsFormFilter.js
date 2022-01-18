import { KeyboardArrowDown, Search } from '@mui/icons-material'
import { Button, Grid, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import Subtitle from '../../../components/Subtitle'
import styles from "../../../styles/EvalPilots.module.scss";

export default function TableAllProcessPilotsFormFilter() {
    const [showMoreOptions, setShowMoreOptions] = useState(false)

    const handleClickMoreOptions = () => setShowMoreOptions(preShowMoreOptions => !preShowMoreOptions)
    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                    <Subtitle title="Pruebas Registradas" icon="manage_accounts" />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={6} >
                    <TextField
                        size="small"
                        label="Buscar prueba"
                        placeholder="Buscar pruebas oftalmológicas de pacientes..."
                        variant="outlined"
                        fullWidth
                        helperText="Puede filtrar las pruebas por los núm. documento, nombre del Paciente o número de ticket."
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={1} textAlign="center" >
                    <Button variant="contained" startIcon={<Search />} size="small">
                        Buscar
                        </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
                    <Button variant="outlined" startIcon={<KeyboardArrowDown />} size="small" onClick={handleClickMoreOptions}>
                        Más Opciones
                        </Button>
                </Grid>
            </Grid>
            {
                showMoreOptions && (
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={3} className={styles.headerTableMoreOptionsFilterContainer}>
                        <Grid item xs={12} sm={3} md={2} lg={1} xl={1} >
                            Fecha Incio
                            </Grid>
                        <Grid item xs={12} sm={9} md={4} lg={3} xl={3} >
                            <TextField
                                type="datetime-local"
                                fullWidth
                                size="small"
                                helperText="Ingrese un rango de fechas"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2} lg={1} xl={1} >
                            Fecha Fin
                            </Grid>
                        <Grid item xs={12} sm={9} md={4} lg={3} xl={3} >
                            <TextField
                                type="datetime-local"
                                fullWidth
                                size="small"
                                helperText="Ingrese un rango de fechas"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2} lg={1} xl={1} >
                            Estado
                            </Grid>
                        <Grid item xs={12} sm={9} md={4} lg={3} xl={3} >
                            <TextField
                                select
                                helperText="Seleccione el estado"
                                fullWidth
                                size="small"
                            >
                                <MenuItem> Iniciado </MenuItem>
                                <MenuItem> Candelado </MenuItem>
                                <MenuItem> Terminado </MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                )
            }
        </>
    )
}
