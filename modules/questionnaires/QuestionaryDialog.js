// React
import React, { useState } from 'react'
// Material UI
import { Close, PlayCircle } from '@mui/icons-material';
import { AppBar, Button, Dialog, Grid, IconButton, Slide, Toolbar, Typography, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

// Local components
import HeaderQuestionnaire from './HeaderQuestionnaire';
import ItemsQuestionnaire from './ItemsQuestionnaire';

// provider data 
import { ownServices } from "../../providers";
import Swal from 'sweetalert2';
// custom hooks
import useLayout from '../../hooks/useLayout';
// utils
import { buildCurrentDateSimpleFormat } from "../../util/ParserDate";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function QuestionaryDialog({ titleDialog = "Cuestionario", typeQuestionary = "q001", num_test_group = "0", code_virtual_task = "0" }) {
    const { updateFlagShowBackdrop } = useLayout()

    const [open, setOpen] = useState(false)
    const [openAlertDialog, setOpenAlertDialog] = useState(false)
    const [msgAlertDialog, setMsgAlertDialog] = useState("")
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [started_at, setStarted_at] = useState(null)


    const handleClickOpen = () => {
        updateFlagShowBackdrop({ show: true })

        ownServices.medical_test.ophthalmological.questionarie.questions_get_all()
            .then(data => {
                setQuestions(data)
                setStarted_at(buildCurrentDateSimpleFormat())
                setAnswers([])
                setOpen(true)
            })
            .catch(error => {
                console.error({ error })

                Swal.fire({
                    icon: "error",
                    title: 'Ocurrio un error al cargar las preguntas.'
                })
            }).finally(() => updateFlagShowBackdrop({ show: false }))
    };

    const handleSubmit = () => {
        const request = {
            num_test_group,
            code_virtual_task,
            started_at,
            finished_at: buildCurrentDateSimpleFormat(),
            observations: "",
            type: typeQuestionary,
            version: "1.0.0",
            description: titleDialog,
            questions: answers
        }
        if (answers.length === 15) {
            updateFlagShowBackdrop({ show: true })
            handleClose()
            ownServices.medical_test.ophthalmological.questionarie.answer_save({ request })
                .then(() => {

                    Swal.fire({
                        icon: "success",
                        title: "Respuestas registradas con éxito"
                    })

                }).catch(() => {
                    setOpenAlertDialog(true)
                    setMsgAlertDialog("Ocurrio un error al registrar las respuestas")
                })
                .finally(() => updateFlagShowBackdrop({ show: false }))
        } else {
            setOpenAlertDialog(true)
            setMsgAlertDialog("El paciente debe contestar todas las preguntas.")
        }

    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChangeAnswers = (answer) => {
        const oldAnswers = answers.filter(ans => ans.id_question !== answer.id_question)
        oldAnswers.push(answer)

        setAnswers(oldAnswers)
    }



    const handleCloseAlertDialog = () => {
        setOpenAlertDialog(false);
    };

    if (!open) {
        return (
            <Button startIcon={<PlayCircle />} variant="contained" onClick={handleClickOpen} > Inicar</Button>
        )
    }

    return (
        <>
            <Button startIcon={<PlayCircle />} variant="contained" onClick={handleClickOpen} > Inicar</Button>
            <Dialog fullScreen open={open}
                onClose={handleClose}
                TransitionComponent={Transition} >
                <AppBar sx={{ position: 'fixed' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <Close />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {titleDialog}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container direction="row" justifyContent="center" marginBottom={10} marginTop={10}  >
                    <HeaderQuestionnaire />
                    <ItemsQuestionnaire questions={questions} onChange={handleOnChangeAnswers} />
                    <Grid item xs={3} textAlign="center">
                        <Button variant="contained" onClick={handleSubmit} > Guardar</Button>
                    </Grid>
                    <Grid item xs={3} textAlign="center" >
                        <Button variant="contained" color="inherit" onClick={handleClose} > Regresar</Button>
                    </Grid>
                </Grid>
            </Dialog>
            <Dialog open={openAlertDialog} onClose={handleCloseAlertDialog} >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {msgAlertDialog}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAlertDialog} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
