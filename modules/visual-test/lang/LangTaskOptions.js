import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Slide, TextField } from '@mui/material'
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
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle> {descriptionTask} </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {purpose}
                    </DialogContentText>
                </DialogContent>
                <DialogContent dividers>
                    <FormGroup>
                        {
                            optionsKnow.map(op => (
                                <FormControlLabel control={<Checkbox />} label={`${op.description} (${op.weighing})`} />
                            ))
                        }
                    </FormGroup>
                </DialogContent>
                <DialogContent dividers>
                    <LabelText> Objetos no identificados:  </LabelText>
                    {
                        unknowOptions.map((option, index) => (
                            <UnknowOption label={option.label} key={index.toString()}
                                handlAddOption={handleClickAddUnknowOption}
                                handleDeleteOption={handleClickDeleteUnknowOption}
                                id={option.id}
                            />
                        ))
                    }
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
