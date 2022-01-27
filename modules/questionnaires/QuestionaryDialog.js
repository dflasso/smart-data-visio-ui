import { Close, PlayCircle } from '@mui/icons-material';
import { AppBar, Button, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import HeaderQuestionnaire from './HeaderQuestionnaire';
import ItemsQuestionnaire from './ItemsQuestionnaire';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function QuestionaryDialog({ titleDialog = "Cuestionario" }) {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                <Grid container direction="row" justifyContent="center" marginBottom={10}  >
                    <ItemsQuestionnaire />
                    <Grid item xs={3} textAlign="center">
                        <Button variant="contained" onClick={handleClose} > Guardar</Button>
                    </Grid>
                    <Grid item xs={3} textAlign="center" >
                        <Button variant="contained" color="inherit" onClick={handleClose} > Regresar</Button>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    )
}
