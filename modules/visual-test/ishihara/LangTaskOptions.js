import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Grid, Slide, TextField } from '@mui/material'
import React from 'react'
import LabelText from '../../../components/LabelText';
import UnknowOption from '../../../components/UnknowOption';
import useLangTaskOptions from '../../../hooks/useLangTaskOptions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


/**
 * Componente que renderiza las diferentes opciones que tiene cada tarjeta de lang
 * @param {*} param0 
 * @returns 
 */
export default function LangTaskOptions({ optionsKnow = [], onSave, idTask = "", descriptionTask = "", purpose = "" }) {
    const { open,
        unknowOptions,
        handleClickOpen,
        handleClose,
        handleClickAddUnknowOption,
        handleClickDeleteUnknowOption,
        handleSave } = useLangTaskOptions(onSave, idTask, descriptionTask)


    if (!open) {
        return (
            <Button variant="outlined" onClick={handleClickOpen}>
                Ejecutar Prueba
            </Button>
        )
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Ejecutar Prueba
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth="md"
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle> {descriptionTask} </DialogTitle>
                <DialogContent dividers>
                    <FormGroup>
                        {
                            optionsKnow.map(op => (
                                <Grid container>
                                    <Grid item xs={6}>
                                        <FormControlLabel control={<Checkbox />} label={`${op.description_spanish} (${op.weighing})`} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LabelText>Otro Objeto identificado:  </LabelText>


                                        <UnknowOption
                                            handlAddOption={handleClickAddUnknowOption}
                                            handleDeleteOption={handleClickDeleteUnknowOption}
                                        />


                                    </Grid>
                                </Grid>
                            ))
                        }
                    </FormGroup>
                </DialogContent>
                <DialogContent dividers>
                    <LabelText> Observaciones:  </LabelText>
                    <TextField
                        variant="outlined"
                        type='text'
                        fullWidth
                        size="small"
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained" onClick={handleSave}>Registrar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
