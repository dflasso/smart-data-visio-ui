// React js
import React from 'react'

// Material UI
import { ExitToApp } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'

// Next aut
import { signOut } from "next-auth/react"


export default function BtnSignOut() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        signOut({ callbackUrl: '/' })
    }

    return (
        <>
            <IconButton size="large" color="inherit" onClick={handleClick}>
                <ExitToApp />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle >
                    Cerrar Sesión
            </DialogTitle>
                <DialogContent>
                    ¿Está seguro que desea cerrar la sesión?
            </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleSignOut}> Salir </Button>
                    <Button variant="contained" color="primary"> Regresar </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
