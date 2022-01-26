// React
import React from 'react'
// Material ui
import { Backdrop, CircularProgress } from '@mui/material'
import useLayout from '../hooks/useLayout'


export default function Loader() {
    const { openBackdrop } = useLayout()
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
