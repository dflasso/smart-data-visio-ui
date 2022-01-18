import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import Subtitle from '../../components/Subtitle'
import styles from "../../styles/ContentPatient.module.scss";

const userDefault = {
    image: "",
    names: "Alberto Freddy",
    lastName: "Campos Espencer",
    numDocumentation: "1700000001"
}

export default function PatientSelected({ user = userDefault }) {
    return (
        <Card className={styles.PatientSelectedCard}>
            <CardContent>
                <Subtitle title="Datos del Paciente" icon="person" />
            </CardContent>
            <CardContent>
                <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item xs={6} md={5} lg={3}  >
                        <label> Nombres</label>
                    </Grid>
                    <Grid item xs={6} md={5} lg={3}  >
                        {user.names} {" "} {user.lastName}
                    </Grid>
                    <Grid item xs={6} md={5} lg={3}  >
                        <label> Cédula/Pasaporte</label>
                    </Grid>
                    <Grid item xs={6} md={5} lg={3}>
                        {user.numDocumentation}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
