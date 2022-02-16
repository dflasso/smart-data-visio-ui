import { PictureAsPdf } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'
import React from 'react'
import ContainerInfoPatient from '../../process/register_ophthalmological_tests/ContainerInfoPatient'
import DetailTest from './DetailTest'
import Recomendation from './Recomendation'
import TableSummaryTest from './TableSummaryTest'
import TableSummaryTestClasicVsVirtual from './TableSummaryTestClasicVsVirtual'
import { useRouter } from 'next/router'

export default function ContentReportByPatient({ idTest, patientNumDocument }) {
    const router = useRouter()
    const handleCreateReport = () => {
        window.open("/template_Informe_Resultados.pdf", "_blank")
    }

    const handleFinished = () => {
        router.push('/process/eval-pilots')
    }
    return (
        <>
            <ContainerInfoPatient idTest={idTest} patientNumDocument={patientNumDocument} />
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} md={10} lg={8} marginBottom={2} >
                <Grid item xs={12} lg={6}>
                    <DetailTest
                        title=' Resultados de la prueba de lang:'
                        hits={6}
                        errors={1}
                        procentajeDefined={30}
                        globalPorcentaje={25, 7}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <DetailTest
                        title=' Resultados de la prueba de ishihara:'
                        hits={17}
                        errors={0}
                        procentajeDefined={30}
                        globalPorcentaje={30}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <DetailTest
                        title=' Resultados de la prueba de percepción de profundidad:'
                        hits={9}
                        errors={1}
                        procentajeDefined={20}
                        globalPorcentaje={18}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <DetailTest
                        title=' Resultados de la prueba de percepción de color:'
                        hits={4}
                        errors={0}
                        procentajeDefined={20}
                        globalPorcentaje={20}
                    />
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} sm={10} md={8} lg={7} xl={6} marginBottom={2} >
                <TableSummaryTest
                    title='Análisis de pruebas en conjunto'
                    langPorcentaje={25, 7}
                    ishiharaPorcentaje={30}
                    deepPorcentaje={18}
                    colorPorcentaje={20}
                    totalPorcentaje={93, 70}
                />
            </Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} ></Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} sm={10} md={8} lg={7} xl={6} marginBottom={5} >
                <Recomendation
                    title='Recomendación/Sugerencia: '
                    recomentationText='No se han encontrado deficiencias visuales. '
                />
            </Grid>

            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} ></Grid>

            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} sm={10} md={8} lg={7} xl={6} marginBottom={2} >
                <TableSummaryTestClasicVsVirtual
                    title='Análisis de Lang y Percepción de profundidad'
                    clasicNameTest='Prueba de Lang'
                    virtualNameTest='Prueba de percepción de profundidad'
                    clasicPorcentaje={86}
                    virtualPorcentaje={90}
                />
            </Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} ></Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} sm={10} md={8} lg={7} xl={6} marginBottom={5} >
                <Recomendation
                    title='Recomendación/Sugerencia: '
                    recomentationText='No se ha encontrado una posible deficiencia visual de estereopsis. '
                />
            </Grid>

            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} ></Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} sm={10} md={8} lg={7} xl={6} marginBottom={2} >
                <TableSummaryTestClasicVsVirtual
                    title='Análisis de Ishihara y Percepción de color'
                    clasicNameTest='Prueba de Ishihara'
                    virtualNameTest='Prueba de percepción de color'
                    clasicPorcentaje={100}
                    virtualPorcentaje={100}
                />
            </Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} ></Grid>
            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} sm={10} md={8} lg={7} xl={6} marginBottom={5} >
                <Recomendation
                    title='Recomendación/Sugerencia: '
                    recomentationText='No se ha encontrado una posible deficiencia visual del color. '
                />
            </Grid>

            <Grid container direction="row" justifyContent="center" justifyItems="center" xs={12} marginBottom={5}>
                <Grid item xs={6} md={5} lg={4} xl={2} textAlign="center">
                    <Button variant='outlined' color="error" startIcon={<PictureAsPdf />} onClick={handleCreateReport} > Imprimir</Button>
                </Grid>
                <Grid item xs={6} md={5} lg={4} xl={2} textAlign="center" >
                    <Button variant='contained' color="inherit" onClick={handleFinished} > Regresar</Button>
                </Grid>
            </Grid>
        </>
    )
}
