//React
import { useState } from 'react';
// Material ui
import { PlayCircle } from '@mui/icons-material'
import { Button, Dialog, DialogContent, DialogTitle, Grid, OutlinedInput } from '@mui/material'
//Utils
import { buildCurrentDateSimpleFormat } from '../../../util/ParserDate';
import TitmusCardAnimal from './TitmusCardAnimal';
// styles 
import styles from "../../../styles/TitmusStep.module.scss";

export default function ButtonAnimalsTest({ animals = [], onSave, idTest }) {
    const [open, setOpen] = useState(false)
    const [observations, setObservations] = useState("")
    const [animalsSelecteds, setAnimalsSelecteds] = useState([])
    const [startedAt, setStartedAt] = useState(null)

    const handleClickOpen = () => {
        setOpen(true);
        setStartedAt(buildCurrentDateSimpleFormat())
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeObservations = (event) => {
        setObservations(event.target.value);
    };

    const handleClickCardAnimal = (value) => {
        const animalsList = animalsSelecteds.filter(animal => animal.id !== value.animalId && animal.row !== value.row)
        animalsList.push({
            id: value.animalId,
            row: value.row
        })
        setAnimalsSelecteds(animalsList)
    }

    const getAnimalSelectedbyRow = (row = "") => {
        try {
            return animalsSelecteds.find(animal => animal.row === row).id
        } catch (error) {
            // Cuando cae en el catch la variable animalsSelecteds es un arreglo vacio
            return ""
        }


    }

    const handleSave = () => {
        const results = []
        let result = null
        let isCorrect = false
        let optionsAnswer = null
        let correctAnswer = null
        let selectedAnswer = null

        animalsSelecteds.forEach(
            animalSelected => {
                optionsAnswer = animals.find(animalsRow => animalsRow.id === animalSelected.row)
                correctAnswer = optionsAnswer.options.find(option => option.is_correct)
                selectedAnswer = optionsAnswer.options.find(option => option.animal_id === animalSelected.id)
                isCorrect = selectedAnswer.animal_id === correctAnswer.animal_id
                result = {
                    animal_id: selectedAnswer.animal_id,
                    animal_name_spanish_correct: correctAnswer.animal_name_spanish,
                    animal_name_english_correct: correctAnswer.animal_name_english,
                    animal_name_spanish_selected: selectedAnswer.animal_name_spanish,
                    animal_name_english_selected: selectedAnswer.animal_name_spanish,
                    weighing_correct: correctAnswer.weighing,
                    weighing_selected: isCorrect ? correctAnswer.weighing : 0.0,
                    row: animalSelected.row,
                    is_correct: isCorrect
                }
                results.push(result)
            }
        )

        const request = {
            ticket_patient_tests: idTest,
            animals_test: {
                id_test: "1",
                observations: observations,
                started_at: startedAt,
                finished_at: buildCurrentDateSimpleFormat(),
                results
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
                maxWidth="md"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Prueba de los Animales</DialogTitle>
                <DialogContent dividers>
                    {animals.map(
                        animalsRow => (
                            <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} key={animalsRow.id}>
                                <Grid item xs={1} className={styles.stepCardLetterRow}>
                                    {animalsRow.id}
                                </Grid>
                                {
                                    animalsRow.options.map(animal => (
                                        <Grid item xs={2} key={animal.animal_id} marginBottom={2}>
                                            <TitmusCardAnimal animal={animal.animal_name_spanish}
                                                animalId={animal.animal_id}
                                                animalSelected={getAnimalSelectedbyRow(animalsRow.id)}
                                                row={animalsRow.id}
                                                onClick={handleClickCardAnimal} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )
                    )
                    }

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
