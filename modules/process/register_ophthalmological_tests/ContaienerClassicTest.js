import { Button, Grid } from '@mui/material'
import React from 'react'
import CardNavHorizontal from '../../../components/CardNavHorizontal'

// Validations
import { isNumber } from "../../../util/validations";

import { useRouter } from 'next/router'

export default function ContaienerClassicTest({ idTest }) {
    const isIdValid = isNumber(idTest)

    const router = useRouter()

    const handleClickLang = () => {
        router.push(`/visual-tests/traditional-lang?id_test_ophthalmological=${idTest}`)
    }

    const handleClickIshihara = () => {
        router.push(`/visual-tests/traditional-ishihara?id_test_ophthalmological=${idTest}`)
    }

    const handleClickTitmus = () => {
        router.push(`/visual-tests/traditional-lang?id_test_ophthalmological=${idTest}`)
    }



    return (
        <CardNavHorizontal
            iconAvatarHeader="medication"
            title="Pruebas Clásicas"
        >
            <Grid container direction="row" spacing={4}>
                <Grid item xs={11} md={3} lg={3}>
                    <Button variant="outlined" fullWidth disabled={!isIdValid} onClick={handleClickLang} >
                        Prueba LANG
                </Button>
                </Grid>
                <Grid item xs={11} md={3} lg={3} spacing={4}>
                    <Button variant="outlined" fullWidth disabled={!isIdValid} onClick={handleClickIshihara}>
                        Prueba Ishihara
                </Button>
                </Grid>
                <Grid item xs={11} md={3} lg={3} spacing={4}>
                    <Button variant="outlined" fullWidth disabled={!isIdValid} onClick={handleClickTitmus}>
                        Prueba Titmus
                </Button>
                </Grid>
            </Grid>
        </CardNavHorizontal>
    )
}
