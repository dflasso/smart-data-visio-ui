import { Grid } from '@mui/material'
import React from 'react'
import { TestLangProvider } from '../../contexts/TestLangContext';
import PrivateLayout from '../../layouts/private_layout'
import LangTasks from '../../modules/visual-test/lang/LangTasks'
import styles from "../../styles/TaditionalPage.module.scss";
// Local Providers Data
import { providers } from "../../providers";

const backend = providers.backend

export default function TaditionalPageIshihara({ cardLang }) {
    return (
        <PrivateLayout titlePage="Prueba Visual ISHIHARA">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.continer} spacing={2} >
                <TestLangProvider>
                    <LangTasks cardLang={cardLang} />
                </TestLangProvider>
            </Grid>
        </PrivateLayout>
    )
}


export async function getServerSideProps(context) {
    const cardLang = await backend.medical_test.ophthalmological.ishihara.findAll()
    return {
        props: {
            cardLang
        }, // will be passed to the page component as props
    }
}
