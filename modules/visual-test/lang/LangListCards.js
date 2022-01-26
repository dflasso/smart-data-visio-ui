//React
import React from 'react'
//Material ui
import { Alert, AlertTitle, Button, Card, CardContent, CardHeader, Grid, useMediaQuery, useTheme } from '@mui/material'
//Local components
import useTestOphthalmologicalLang from '../../../hooks/useTestOphthalmologicalLang'
import LangTaskOptions from './LangTaskOptions'
//styles
import styles from "../../../styles/TestOphthalmologicalProcess.module.scss";
import LangTaskDetailsStep from './LangTaskDetailsStep';


export default function LangListCards() {
    //Styles hooks
    const theme = useTheme();
    const fullWidth = useMediaQuery(theme.breakpoints.down('sm'));
    // state hooks
    const { langCards,
        goNextTab,
        handleSaveOneResult,
        checkIfCardWasSaved,
        getResulCard
    } = useTestOphthalmologicalLang()


    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>

            <Grid item xs={12} >
                <Alert severity="info">
                    <AlertTitle><b>Prueba Lang</b></AlertTitle>
                    Es una prueba fácil de usar, diseñada para el descubrimiento temprano
                    de problemas de la visión estereoscópica.El objeto es reconocer los objetos
                    en 3D mostrados en las tarjetas.
                </Alert>
            </Grid>
            {
                Array.isArray(langCards) &&
                langCards.map(card => (
                    <Grid item xs={6} key={card.id} >
                        <Card className={styles.cardLang}>
                            <CardHeader
                                title={card.name_test_spanish}
                                className={styles.cardLangHeader}
                            />
                            <CardContent>
                                <Grid container direction="row" justifyContent="center" alignItems="center">

                                    <Grid item xs={12} textAlign="center">
                                        {
                                            checkIfCardWasSaved({ idCard: card.id }) ?
                                                <LangTaskDetailsStep
                                                    typeBtn="contained"
                                                    results={getResulCard({ idCard: card.id })}
                                                />
                                                :
                                                <LangTaskOptions
                                                    optionsKnow={card.items_card}
                                                    onSave={handleSaveOneResult}
                                                    idTask={card.id}
                                                    descriptionTask={card.name_test_spanish}
                                                    BtnText="Iniciar"
                                                    typeBtn={fullWidth ? 'normalContainedFullWidth' : 'normalContained'}
                                                />
                                        }

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
            <Grid item xs={5} md={4} lg={2} textAlign="center" marginTop={2} >
                <Button variant="contained" disabled>  Atras </Button>
            </Grid>
            <Grid item xs={5} md={4} lg={2} textAlign="center" marginTop={2} >
                <Button variant="contained" color="success" onClick={goNextTab} >  Siguiente </Button>
            </Grid>

        </Grid>
    )
}
