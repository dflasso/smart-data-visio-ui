import { PlayCircle } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

export default function ButtonHouseFly() {
    return (
        <Button variant="contained" startIcon={<PlayCircle />} >
            Iniciar
        </Button>
    )
}
