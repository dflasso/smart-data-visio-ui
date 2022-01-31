// React
import React, { useState } from 'react'
// Material Ui
import { PlayCircle } from '@mui/icons-material'
import { Button, Dialog, DialogContent, DialogTitle, FormControlLabel, FormGroup, FormLabel, Grid, OutlinedInput, Radio, RadioGroup } from '@mui/material'
// Utils
import { buildCurrentDateSimpleFormat } from "../../../util/ParserDate";

export default function ButtonHouseFly({ onSave, idTest = "0" }) {
    const [open, setOpen] = useState(false)
    const [viewFly, setViewFly] = useState(false)
    const [observations, setObservations] = useState("")
    const [startedAt, setStartedAt] = useState(null)

    const handleClickOpen = () => {
        setOpen(true);
        setStartedAt(buildCurrentDateSimpleFormat())
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeViewFly = (event) => {
        setViewFly((event.target.value === 'S') ? true : false);
    };

    const handleChangeObservations = (event) => {
        setObservations(event.target.value);
    };

    const handleSave = () => {
        const request = {
            ticket_patient_tests: idTest,
            house_fly: {
                id_test: "1",
                view_fly: viewFly,
                observations: observations,
                started_at: startedAt,
                finished_at: buildCurrentDateSimpleFormat()
            }
        }
        handleClose()
        if (typeof onSave === "function") {
            onSave({
                data: request
            })
        } else {
            console.error("prop: onSave is undefined.")
        }
    }


    if (!open) {
        return (
            <Button variant="contained" startIcon={<PlayCircle />} onClick={handleClickOpen} >
                Iniciar
            </Button>
        )
    }


    return (
        <>
            <Button variant="contained" startIcon={<PlayCircle />} onClick={handleClickOpen}>
                Iniciar
            </Button>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Prueba de la Mosca</DialogTitle>
                <DialogContent dividers>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormLabel id="patient_can_take_fly">¿El paciente pudo tomar las alas de la mosca?</FormLabel>
                                <RadioGroup row name="view_fly" value={viewFly ? 'S' : 'N'}
                                    onChange={handleChangeViewFly} >
                                    <FormControlLabel value="S" control={<Radio />} label="Si" />
                                    <FormControlLabel value="N" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormGroup>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogContent dividers>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <label>Obervaciones:</label>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput
                                size="small"
                                fullWidth
                                onChange={handleChangeObservations}
                                value={observations}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogContent dividers>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={5} textAlign="center" >
                            <Button variant="contained" onClick={handleSave} >Registrar</Button>
                        </Grid>
                        <Grid item xs={5} textAlign="center">
                            <Button variant="contained" color="error" onClick={handleClose} >Cancelar</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}
