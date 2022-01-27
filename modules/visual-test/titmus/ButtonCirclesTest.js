//React
import { useState } from 'react';
// Material ui
import { Button, Dialog, DialogContent, DialogTitle, FormControl, Grid, MenuItem, OutlinedInput, Select } from '@mui/material'
import { PlayCircle } from '@mui/icons-material'
//Utils
import { buildCurrentDateSimpleFormat } from '../../../util/ParserDate';



export default function ButtonCirclesTest({ onSave, idTest = "0", circles = [] }) {
    const [open, setOpen] = useState(false)
    const [observations, setObservations] = useState("")
    const [startedAt, setStartedAt] = useState(null)
    const [answers, setAnswers] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
        setStartedAt(buildCurrentDateSimpleFormat())
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChangeSelects = (event) => {
        const newAnswers = answers.filter(answer => answer.numFigure !== event.target.name)
        newAnswers.push({
            numFigure: event.target.name,
            idOptionCircule: event.target.value
        })
        setAnswers(newAnswers)
    }

    const handleChangeObservations = (event) => {
        setObservations(event.target.value);
    };

    const handleSave = () => {
        const results = []
        let result = null
        let isCorrect = false
        let optionsAnswer = null
        let correctAnswer = null
        let selectedAnswer = null
        answers.forEach(
            answer => {
                optionsAnswer = circles.find(circle => circle.id === answer.numFigure)
                correctAnswer = optionsAnswer.options.find(option => option.is_correct)
                selectedAnswer = optionsAnswer.options.find(option => option.cirles_id === answer.idOptionCircule)
                isCorrect = selectedAnswer.cirles_id === correctAnswer.cirles_id
                result = {
                    cirles_id: answer.idOptionCircule,
                    circle_name_spanish_correct: correctAnswer.circle_name_spanish,
                    circle_name_english_correct: correctAnswer.circle_name_english,
                    circle_name_spanish_selected: selectedAnswer.circle_name_spanish,
                    circle_name_english_selected: selectedAnswer.circle_name_english,
                    weighing_correct: correctAnswer.weighing,
                    weighing_selected: isCorrect ? correctAnswer.weighing : 0.0,
                    num_figure: Number(answer.numFigure),
                    is_correct: isCorrect
                }
                results.push(result)
            }
        )

        const request = {
            ticket_patient_tests: idTest,
            circles_test: {
                id_test: "1",
                observations: observations,
                started_at: startedAt,
                finished_at: buildCurrentDateSimpleFormat(),
                results
            }
        }

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
            <Button variant="contained" startIcon={<PlayCircle />} onClick={handleClickOpen} >
                Iniciar
            </Button>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Prueba de los Círculos</DialogTitle>
                <DialogContent dividers>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                        {
                            circles.map(
                                circle => (
                                    <Grid key={circle.id} xs={12} md={6} lg={4} paddingLeft={2} marginBottom={2}>

                                        <FormControl fullWidth >
                                            <label>{circle.label}</label>
                                            <Select name={circle.id} size="small" onChange={handleOnChangeSelects} >
                                                {
                                                    circle.options.map(
                                                        option => (
                                                            <MenuItem value={option.cirles_id} key={option.cirles_id} >
                                                                {option.circle_name_spanish}
                                                            </MenuItem>
                                                        )
                                                    )
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                )
                            )
                        }
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
