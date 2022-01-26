//React
import React, { useState } from 'react'
// Material ui
import { InfoRounded } from '@mui/icons-material'
import { Dialog, DialogContent, DialogTitle, IconButton, useMediaQuery, useTheme } from '@mui/material'
// Styles
import styles from "../../styles/EvalPilots.module.scss"
import FormRegisterPatient from './FormRegisterPatient'
// Next.js
import { useRouter } from 'next/router'
import useLayout from '../../hooks/useLayout'

export default function BtnEditPatient({ patient_data = {} }) {
    // hooks UI
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
    // hook router
    const router = useRouter()
    // hook layout
    const { updateFlagShowBackdrop } = useLayout()
    // hook state
    const [open, setOpen] = useState(false)

    const initialData = {
        ...patient_data,
        selectedDocument: 'C',
        diseases: '',
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = ({ data = {}, error = {}, is_successfull = true }) => {
        if (data === null && error === null && !is_successfull) {
            handleClose()
        } else {
            handleClose()
            updateFlagShowBackdrop({ show: true })
            router.push(`/process/eval-pilots`).finally(() => updateFlagShowBackdrop({ show: false }))
        }
    }

    if (!open) {
        return (
            <IconButton className={styles.BtnDetailRow} onClick={handleClickOpen} >
                <InfoRounded />
            </IconButton>
        )
    }

    return (
        <>
            <IconButton className={styles.BtnDetailRow} onClick={handleClickOpen} >
                <InfoRounded />
            </IconButton>
            <Dialog fullScreen={fullScreen} fullWidth maxWidth="md" open={open} onClose={handleClose} >
                <DialogTitle className={styles.dialogDetailsPatientHeader}>Detalles del Paciente</DialogTitle>
                <DialogContent dividers>
                    <FormRegisterPatient
                        onSave={handleSave}
                        initialValues={initialData}
                        recoveryPatient={true}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}
