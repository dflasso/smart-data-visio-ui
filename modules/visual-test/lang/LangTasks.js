import { Card, CardContent, Grid } from '@mui/material'

import React from 'react'
import styles from "../../../styles/LangTasks.module.scss"
import TableAllLangCardsHeader from './TableAllLangCardsHeader'
import TableAllLangCardsRow from './TableAllLangCardsRows'

export default function LangTasks({ cardLang }) {

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} spacing={2}>
            <Card className={styles.cardContainer}>
                <CardContent>
                    <TableAllLangCardsHeader />
                    {
                        Array.isArray(cardLang) && cardLang.map(card => <TableAllLangCardsRow row={card} />)
                    }
                </CardContent>
            </Card>

        </Grid>
    )
}
