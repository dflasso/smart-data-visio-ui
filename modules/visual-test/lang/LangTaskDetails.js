//React js
import React, { useState } from 'react'
// material ui
import { ChevronRight, Info } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import useTestLangCards from '../../../hooks/useTestLangCards'
import Swal from 'sweetalert2'

//styles
import styles from "../../../styles/LangTasks.module.scss";
import Subtitle from '../../../components/Subtitle'

const parseDate = (date) => {
    let dateTask = new Date(date)
    return `${dateTask.toLocaleDateString()}  ${dateTask.toLocaleTimeString()}`
}



export default function LangTaskDetails({ id_test, typeBtn = "normal" }) {
    const [open, setOpen] = useState(false)

    const {
        analythicTest
    } = useTestLangCards()

    const handleClickOpen = () => {
        setOpen(true);

    }

    const handleClose = () => {
        setOpen(false);
    }

    const resolveTypeBtn = () => {
        if (typeBtn === "normal") {
            return (
                <Button variant="outlined" startIcon={<Info />} size="small" onClick={handleClickOpen}>
                    Ver los Resultados
                </Button>
            )
        } else {
            return (<IconButton color="info" component="span" onClick={handleClickOpen}>
                <Info />
            </IconButton>)
        }
    }

    if (!open) {
        return resolveTypeBtn()
    }



    const results = analythicTest(id_test)



    if (results === null) {
        Swal.fire({
            title: 'La prueba aún no fue ejecutada',
            icon: 'info'
        })
        return resolveTypeBtn()
    }

    const answers = []

    if (Array.isArray(results.items_card)) {
        results.items_card.forEach(element => {
            if (element.answer_correct) {
                answers.push({
                    answer_correct: element.answer_correct,
                    value: element.correct_answer_spanish
                })
            }

            if (Array.isArray(element.incorrect_answers) && element.incorrect_answers.length > 0) {
                element.incorrect_answers.forEach(
                    ans => answers.push({
                        answer_correct: false,
                        value: ans
                    })
                )
            }

        });
    }

    return (
        <>
            {resolveTypeBtn()}
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle className={styles.headerDialogs}>
                    {results.card_test_name_spanish}
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <Grid item xs={6} md={5} lg={4} xl={4} className={styles.cellDialogs}>
                            Fecha y Hora inicio:
                        </Grid>
                        <Grid item xs={6} md={5} lg={4} xl={7} className={styles.cellDialogsDetails}>
                            {parseDate(results.started_at)}
                        </Grid>
                        <Grid item xs={6} md={5} lg={4} xl={4} className={styles.cellDialogs}>
                            Fecha y Hora final:
                        </Grid>
                        <Grid item xs={6} md={5} lg={4} xl={7} className={styles.cellDialogsDetails}>
                            {parseDate(results.finished_at)}
                        </Grid>
                        <Grid item xs={6} md={5} lg={4} xl={4} className={styles.cellDialogs}>
                            Observaciones:
                        </Grid>
                        <Grid item xs={6} md={5} lg={4} xl={7} className={styles.cellDialogsDetails}>
                            {results.observations}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogContent dividers>
                    <Subtitle title="Objetos encontrados" icon="account_box" />
                    <List dense>
                        {answers.map(
                            ans => (
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary={ans.value} />
                                </ListItem>
                            ))
                        }
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}
