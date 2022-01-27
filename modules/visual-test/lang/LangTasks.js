//React 
import React, { useEffect } from 'react'
// material ui
import { Backdrop, Button, Card, CardContent, CircularProgress, Divider, Grid } from '@mui/material'

//Local components
import useTestLangCards from '../../../hooks/useTestLangCards'
import styles from "../../../styles/LangTasks.module.scss"
import TableAllLangCardsHeader from './TableAllLangCardsHeader'
import TableAllLangCardsRow from './TableAllLangCardsRows'

export default function LangTasks({ cardLang, idTest }) {


    const {
        loadCardLang,
        loadIdTest,
        showBackdrop,
        handleGoBack
    } = useTestLangCards()

    useEffect(() => {
        loadCardLang()
        loadIdTest({ idTestOphthalmological: idTest })
        return () => { }
    }, [])

    const onGoBack = () => {
        handleGoBack(idTest)
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} spacing={2}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Card className={styles.cardContainer}>
                <CardContent>
                    <TableAllLangCardsHeader />
                    {
                        Array.isArray(cardLang) && cardLang.map(card => <TableAllLangCardsRow key={cardLang.id} row={card} />)
                    }
                </CardContent>
            </Card>
            <Divider />
            <Grid container direction="row" justifyContent="center" alignItems="center" xs={12} >

                <Grid item xs={4} md={3} lg={3} xl={2} textAlign="center">
                    <Button variant="contained" onClick={onGoBack}  >
                        Finalizar Prueba
                        </Button>
                </Grid>
            </Grid>

        </Grid>
    )
}
