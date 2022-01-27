
import { Card, Grid, Radio } from '@mui/material'
import React from 'react'
import LabelOutline from '../../components/LabelOutline';
import LabelText from '../../components/LabelText';
import usePageSearchPatient from '../../hooks/usePageSearchPatient';
import styles from "../../styles/ContentPatient.module.scss";

export default function CardDetailPatiend({ patient }) {
    const {
        checkIfPatientWasSelected,
        updatePatientSelected
    } = usePageSearchPatient()

    const patientWasSelected = checkIfPatientWasSelected(patient.id)

    return (
        <Grid item xs={12} md={12} lg={10}  >
            <Card className={styles.containerCardDetailPatient} >

                <Grid container direction="row" justifyContent="start" spacing={1} alignItems="center" >

                    <Grid item sx={{ display: { xs: 'flex' } }} sm={1} md={1} xl={1} lg={1} alignSelf="center" justifyContent="center" className={styles.dividerDetailPatient}>
                        <Radio value={patient.id} checked={patientWasSelected} onChange={updatePatientSelected} />
                    </Grid>

                    <Grid item xs={8} sx={{ display: { lg: 'none', xs: 'flex', sm: 'flex', md: 'none' } }}>
                        <Grid container direction="column"  >
                            <Grid item >
                                <LabelText > {`${patient.first_name} ${patient.last_name}`} <br /> {patient.doc_identification} </LabelText>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={3} xl={4} >
                        <LabelOutline > {`${patient.first_name} ${patient.last_name}`}</LabelOutline>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={2} xl={1} textAlign="center" >
                        <LabelOutline > {patient.doc_identification}</LabelOutline>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'none' } }} lg={3} xl={3} textAlign="center" >
                        <LabelOutline > {patient.email} </LabelOutline>
                    </Grid>
                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={2} xl={2} textAlign="center" >
                        <LabelOutline > {patient.phone} </LabelOutline>
                    </Grid>
                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={2} xl={1} textAlign="center" >
                        <LabelOutline >  {patient.birthday}  </LabelOutline>
                    </Grid>


                </Grid>
            </Card>
        </Grid>
    )
}
