import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Slide, TextField } from '@mui/material'
import React, { useState } from 'react'
import LabelText from '../../components/LabelText';
import UnknowOption from '../../components/UnknowOption';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const unknowOptionBase = {
    id: "1",
    label: "Otro",
    value: ""
}

export default function LangTaskOptions({ optionsKnow = [] }) {
    const [open, setOpen] = useState(false)
    const [unknowOptions, setunknowOptions] = useState(null)

    const handleClickOpen = () => {
        setOpen(true)
        setunknowOptions([unknowOptionBase])
    }

    const handleClose = () => setOpen(false)

    const handleClickAddUnknowOption = () => {
        const newId = Number(unknowOptions[unknowOptions.length - 1].id) + 1
        const newUnknowOptions = [...unknowOptions, { ...unknowOptionBase, id: newId.toString() }]
        if (Array.isArray(newUnknowOptions)) {
            setunknowOptions(newUnknowOptions)
        }
    }

    const handleClickDeleteUnknowOption = (id) => {
        setunknowOptions(preUnknowOptions => preUnknowOptions.filter(item => item.id !== id))
    }

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
                <DialogTitle> Lamina 1 </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Por favor selección los objetos vistos por el paciente:
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
                    <Button variant="contained" onClick={handleClose}>Registrar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
