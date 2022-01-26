import { PlayCircle } from '@mui/icons-material';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, Grid, IconButton, Slide, TextField } from '@mui/material'
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
export default function IshiharaTaskOptions({ optionsKnow = [], onSave, idTask = "", descriptionTask = "", typeBtn = "normal", BtnText = "Ejecutar Prueba" }) {
    const { open,
        handleClickOpen,
        handleClose,
        handleClickAddUnknowOption,
        handleClickDeleteUnknowOption,
        handleChangeCheckBox,
        handleChangeObservations,
        observations,
        handleSave } = useLangTaskOptions(onSave, idTask, descriptionTask, optionsKnow)

    const resolveTypeBtn = () => {
        if (typeBtn === "normal") {
            return (
                <Button variant="outlined" onClick={handleClickOpen} size="small" startIcon={<PlayCircle />} color="success">
                    {BtnText}
                </Button>
            )
        } else if (typeBtn === "normalContainedFull") {
            return (
                <Button variant="contained" onClick={handleClickOpen} startIcon={<PlayCircle />} >
                    {BtnText}
                </Button>
            )
        } else {
            return (<IconButton color="success" component="span" onClick={handleClickOpen}>
                <PlayCircle />
            </IconButton>)
        }
    }

    if (!open) {
        return resolveTypeBtn()
    }

    return (
        <>
            {resolveTypeBtn()}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth="sm"
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle> {descriptionTask} <br /> <small> Ingrese los números o formas que visualiza el usuario. </small> </DialogTitle>
                <DialogContent dividers>
                    <FormGroup>
                        {
                            optionsKnow.map(op => (
                                <Grid container>
                                    <Grid item xs={3}>
                                        <FormControlLabel control={<Checkbox onChange={handleChangeCheckBox(op.item_id)} />} label={`${op.description_spanish}`} />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <LabelText>Otro Número o forma identificada:  </LabelText>


                                        <UnknowOption
                                            handlAddOption={handleClickAddUnknowOption}
                                            handleDeleteOption={handleClickDeleteUnknowOption}
                                            id_reference={op.item_id}
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
                        value={observations}
                        size="small"
                        onChange={handleChangeObservations}
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
