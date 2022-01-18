import { Delete, Info } from '@mui/icons-material'
import { Card, Divider, Grid, IconButton } from '@mui/material'
import React from 'react'
import Subtitle from '../../../components/Subtitle'
import useTestLangCards from '../../../hooks/useTestLangCards'
import styles from "../../../styles/LangTasks.module.scss"
import { parseDateSimple } from '../../../util/ParserDate'
import HeaderTableLtsResultCardLang from './HeaderTableLtsResultCardLang'

export default function LtsResultCardsLang() {
    const { cards } = useTestLangCards()

    if (!Array.isArray(cards)) {
        return (
            <Card className={styles.summaryTestLangCardResultCard}>
                <Subtitle title="Resumen de la prueba visual" icon="article" />
            </Card>
        )
    }

    return (
        <Card className={styles.summaryTestLangCardResultCard}>
            <Subtitle title="Resumen de la prueba visual" icon="article" />
            <HeaderTableLtsResultCardLang />
            {
                cards.map((card, index) => (
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" key={card.idTask} >
                        <Grid item xs={2} md={1} lg={1} xl={1} textAlign="center" >
                            {index + 1}
                        </Grid>
                        <Grid item xs={6} md={3} lg={2} xl={1}>
                            {card.descriptionTask}
                        </Grid>
                        <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
                            md={3} lg={2} xl={2}>
                            {parseDateSimple(card.tiemstampStart)}
                        </Grid>
                        <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
                            md={3} lg={2} xl={2}>
                            {parseDateSimple(card.timestampEnd)}
                        </Grid>
                        <Grid item sx={{ display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}
                            lg={3} xl={4}>
                            {card.observations}
                        </Grid>
                        <Grid item xs={2} md={1} lg={1} xl={1} textAlign="center">
                            <IconButton className={styles.summaryTestLangCardIconBtn}>
                                <Info />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} md={1} lg={1} xl={1} textAlign="center">
                            <IconButton className={styles.summaryTestLangCardIconBtnDelete}>
                                <Delete />
                            </IconButton>
                        </Grid>
                    </Grid>
                ))
            }
            <Divider />
        </Card>
    )
}
