import { AccountCircle } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'
import BtnSignOut from './BtnSignOut'

export default function BtnsLftHeader() {
    return (
        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
                <AccountCircle />
            </IconButton>
            <BtnSignOut />
        </Box>
    )
}
