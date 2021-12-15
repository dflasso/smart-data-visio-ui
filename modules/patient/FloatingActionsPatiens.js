import { Cancel, Pause, Save } from '@mui/icons-material'
import { Backdrop, Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function FloatingActionsPatiens({ lastPage = "/process/eval-pilots" }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const router = useRouter()

    const handleClose = () => {
        setOpen(false)
        router.push(lastPage)
    }

    return (
        <Box sx={{ height: 450, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="Floating Action patients"
                sx={{ position: 'absolute', bottom: 0, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                <SpeedDialAction
                    tooltipTitle="Registrar"
                    icon={<Save />}
                    tooltipOpen
                    onClick={handleClose}
                />
                <SpeedDialAction
                    tooltipTitle="Pausar"
                    icon={<Pause />}
                    tooltipOpen
                    onClick={handleClose}
                />
                <SpeedDialAction
                    tooltipTitle="Cancelar"
                    icon={<Cancel />}
                    tooltipOpen
                    onClick={handleClose}
                />
            </SpeedDial>
        </Box>
    )
}
