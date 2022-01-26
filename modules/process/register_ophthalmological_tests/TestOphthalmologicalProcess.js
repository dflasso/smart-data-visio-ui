import * as React from 'react';
//Material Ui
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Grid } from '@mui/material';
//styles
import styles from "../../../styles/TestOphthalmologicalProcess.module.scss";
//Local components
import CardNavHorizontal from '../../../components/CardNavHorizontal';
import useTestOphthalmologicalProcess from '../../../hooks/useTestOphthalmologicalProcess';
import ListTestOphthalmological from './ListTestOphthalmological';
import LangListCards from '../../visual-test/lang/LangListCards';
import IshisharaTestStepper from '../../visual-test/ishihara/IshisharaTestStepper';
import TitmusTestStepper from '../../visual-test/titmus/TitmusTestStepper';

import VirtualTaskStep from '../../virtual_task/VirtualTaskStep';
import { ArrowCircleLeftRounded, ArrowCircleRightRounded } from '@mui/icons-material';

export default function TestOphthalmologicalProcess({ idTest }) {

    const { currentTest, openListTest, showListTest } = useTestOphthalmologicalProcess({ idTest })


    return (
        <CardNavHorizontal
            iconAvatarHeader="health_and_safety"
            title="Proceso de las Pruebas"
        >

            <TabContext value={currentTest}>
                <Grid container direction="row">
                    {openListTest && (
                        <Grid item xs={12} sm={4} md={3} lg={3} xl={3} className={styles.cardTestListTestOphthalmologicalProcess}>
                            <ListTestOphthalmological />
                        </Grid>
                    )}

                    <Grid item xs={12} sm={openListTest ? 8 : 12} md={openListTest ? 9 : 12} lg={openListTest ? 9 : 12}
                        xl={openListTest ? 9 : 12}>
                        {openListTest ?
                            <Button size="small" startIcon={<ArrowCircleLeftRounded />} onClick={showListTest(false)} >Ocultar Lista de Pruebas</Button> :
                            <Button size="small" startIcon={<ArrowCircleRightRounded />} onClick={showListTest(true)}  >Mostrar Lista de Pruebas</Button>
                        }

                        <TabPanel value="1"> <LangListCards /> </TabPanel>
                        <TabPanel value="2"> <IshisharaTestStepper /> </TabPanel>
                        <TabPanel value="3"><TitmusTestStepper /> </TabPanel>
                        <TabPanel value="4">
                            <VirtualTaskStep name="Visión estereoscópica" numNextTab="5" numPreviousTab="3" />
                        </TabPanel>
                        <TabPanel value="5">
                            <VirtualTaskStep name="Percepción visual de profundidad" numNextTab="6" numPreviousTab="4" />
                        </TabPanel>
                        <TabPanel value="6">
                            <VirtualTaskStep name="Percepción visual de color" numNextTab="7" numPreviousTab="5" />
                        </TabPanel>
                        <TabPanel value="7">
                            <VirtualTaskStep name="Campo Visual" numNextTab="1" numPreviousTab="6" />
                        </TabPanel>
                    </Grid>
                </Grid>

            </TabContext>

        </CardNavHorizontal>
    );
}
