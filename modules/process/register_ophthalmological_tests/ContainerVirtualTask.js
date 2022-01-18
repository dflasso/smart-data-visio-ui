import { Button, Grid } from '@mui/material'
import React from 'react'
import CardNavHorizontal from '../../../components/CardNavHorizontal'

import { useRouter } from 'next/router'


// Validations
import { isNumber } from "../../../util/validations";

export default function ContainerVirtualTask({ idTest }) {
    const isIdValid = isNumber(idTest)
    const router = useRouter()

    const handleClickStereoscopic = () => {
        router.push("/visual-tests/stereoscopic_vision")
    }

    const handleClickDepthPerception = () => {
        router.push("/visual-tests/depth_perception")
    }

    const handleClickColorPerception = () => {
        router.push("/visual-tests/color_perception")
    }

    const handleClickVisualField = () => {
        router.push("/visual-tests/visual_field")
    }

    return (
        <CardNavHorizontal
            iconAvatarHeader="phonelink"
            title="Tareas Virtuales"
        >
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth onClick={handleClickStereoscopic} disabled={!isIdValid}>
                        Visión estereoscópica
                </Button>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth onClick={handleClickDepthPerception} disabled={!isIdValid}>
                        Percepción visual de profundidad
                </Button>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth onClick={handleClickColorPerception} disabled={!isIdValid}>
                        Percepción visual de color
                </Button>
                </Grid>
                <Grid item xs={11} md={6} lg={3}>
                    <Button variant="outlined" fullWidth onClick={handleClickVisualField} disabled={!isIdValid}>
                        Campo Visual
                </Button>
                </Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
