import { Grid } from '@mui/material'
import React from 'react'
import { TestLangProvider } from '../../contexts/TestLangContext';
import PrivateLayout from '../../layouts/private_layout'
import LangTasks from '../../modules/visual-test/lang/LangTasks'
import styles from "../../styles/TaditionalPage.module.scss";
// Local Providers Data
import { providers } from "../../providers";

const coreBackend = providers.coreBackend

export default function TaditionalPage({ cardLang, idTest = "0" }) {
    return (
        <PrivateLayout titlePage="Prueba Visual LANG">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.continer} spacing={2} >
                <TestLangProvider>
                    <LangTasks cardLang={cardLang} idTest={idTest} />
                </TestLangProvider>
            </Grid>
        </PrivateLayout>
    )
}


export async function getServerSideProps(context) {
    let idTest = ''

    if (typeof context.query !== "undefined" && typeof context.query === "object") {
        if (typeof context.query.id_test_ophthalmological !== "undefined" && context.query.id_test_ophthalmological !== null) {
            idTest = context.query.id_test_ophthalmological
        }
    }

    const cardLang = await coreBackend.medical_test.ophthalmological.lang.findAll()

    return {
        props: {
            cardLang,
            idTest
        }, // will be passed to the page component as props
    }
}
