// React
import React, { useState } from "react"
// material ui
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid, IconButton, Slide, Toolbar, Typography } from "@mui/material"
import { Close, PlayCircle } from "@mui/icons-material";

// local components
import HeaderEvaluation from "./HeaderEvaluation";
import SectionEvaluation from "./SectionEvaluation";

// provider
import { ownServices } from "../../providers";

//Constants
import { sectionsQuestions } from "../../constants/EvaluationsQuestions";
import Swal from "sweetalert2";
import useLayout from "../../hooks/useLayout";
// utils
import { buildCurrentDateSimpleFormat } from "../../util/ParserDate";

const questionsInitial = {
    questionsSection1: [],
    questionsSection2: [],
    questionsSection3: [],
    questionsSection4: [],
    questionsLoad: false
}

const filterQuestionsBySections = (questions = [], setState) => {
    const questionsBySection = questionsInitial
    questionsBySection.questionsLoad = true
    questionsBySection.questionsSection1 = questions.filter(question => question.code === sectionsQuestions.section1)
    questionsBySection.questionsSection2 = questions.filter(question => question.code === sectionsQuestions.section2)
    questionsBySection.questionsSection3 = questions.filter(question => question.code === sectionsQuestions.section3)
    questionsBySection.questionsSection4 = questions.filter(question => question.code === sectionsQuestions.section4)

    if (typeof setState === "function") {
        setState(questionsBySection)
    }
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DiaglosEvaluation({ titleDialog = "Evaluación", typeQuestionary = "q001", num_test_group = "0", code_virtual_task = "0" }) {
    const [open, setOpen] = useState(false);
    const [questions, setQuestions] = useState(questionsInitial);
    const [answers, setAnswers] = useState([])

    const [openAlertDialog, setOpenAlertDialog] = useState(false)
    const [msgAlertDialog, setMsgAlertDialog] = useState("")
    const [started_at, setStarted_at] = useState(null)

    // layout hook+
    const { updateFlagShowBackdrop } = useLayout()

    const handleClickOpen = () => {
        updateFlagShowBackdrop({ show: true })
        ownServices.medical_test.ophthalmological.evaluations.usability.find_questions()
            .then(data => {
                filterQuestionsBySections(data, setQuestions)
                setStarted_at(buildCurrentDateSimpleFormat())
                setAnswers([])
                setOpen(true)
            })
            .catch(error => Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error al cargar la preguntas'
            }))
            .finally(() => updateFlagShowBackdrop({ show: false }))

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeAnswers = (data) => {
        const newAnswers = answers.filter(answer => answer.id_question != data.id_question)
        newAnswers.push(data)
        setAnswers(newAnswers)
    }


    const handleCloseAlertDialog = () => {
        setOpenAlertDialog(false);
    };

    const handleSubmit = () => {
        if (answers.length === 20) {
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

            updateFlagShowBackdrop({ show: true })
            handleClose()
            ownServices.medical_test.ophthalmological.questionarie.answer_save({ request })
                .then(() => {

                    Swal.fire({
                        icon: "success",
                        title: "Respuestas registradas éxito"
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


    return (
        <>
            <Button startIcon={<PlayCircle />} variant="contained" onClick={handleClickOpen} > Inicar</Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>

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

                <HeaderEvaluation />

                <SectionEvaluation
                    description="Seleccione la opción que corresponda de acuerdo a su experiencia en entornos virtuales"
                    questions={questions.questionsSection1}
                    onChange={handleChangeAnswers}
                />

                <SectionEvaluation
                    description="Seleccione la opción que corresponda de acuerdo a su experiencia sobre la aplicación"
                    questions={questions.questionsSection2}
                    onChange={handleChangeAnswers}
                />

                <SectionEvaluation
                    description="Seleccione la opción de acuerdo a su experiencia sobre el entorno y el dispositivo"
                    questions={questions.questionsSection3}
                    onChange={handleChangeAnswers}
                />

                <SectionEvaluation
                    description="Seleccione la respuesta de acuerdo a su valoración sobre la aplicación usada"
                    questions={questions.questionsSection4}
                    onChange={handleChangeAnswers}
                />

                <Grid container direction="row" justifyContent="center" alignContent="center" marginBottom={3} >
                    <Grid item xs={12} md={6} lg={3} xl={1} textAlign="center">
                        <Button variant="contained" onClick={handleSubmit}> Guardar </Button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} xl={1} textAlign="center">
                        <Button variant="contained" color="inherit" onClick={handleClose} > Regresar </Button>
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