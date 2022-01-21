import { AddBoxRounded, BackspaceRounded } from '@mui/icons-material'
import { Grid, IconButton, TextField } from '@mui/material'
import React from 'react'

export default function UnknowOption({ label = "", handleDeleteOption, handlAddOption, id_reference = "1" }) {

    const handleClickAdd = (event) => {
        if (typeof handlAddOption === "function") {
            handlAddOption({ value: event.target.value, id_reference })
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
                    onChange={handleClickAdd}
                />
            </Grid>
        </Grid>
    )
}
