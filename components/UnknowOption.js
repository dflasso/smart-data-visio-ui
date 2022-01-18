import { AddBoxRounded, BackspaceRounded } from '@mui/icons-material'
import { Grid, IconButton, TextField } from '@mui/material'
import React from 'react'

export default function UnknowOption({ label = "", handleDeleteOption, handlAddOption, id = "1" }) {

    const handleClickAdd = () => {
        if (typeof handlAddOption === "function") {
            handlAddOption()
        }
    }

    const handleClickDelete = () => {
        if (typeof handlAddOption === "function") {
            handleDeleteOption(id)
        }
    }

    return (
        <Grid container >
            <Grid item xs={10} md={9} lg={9} >
                <TextField
                    variant="outlined"
                    type='text'
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
    )
}
