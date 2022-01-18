
// React.js
import React from 'react'
// Next.js
import { useRouter } from 'next/router'

// Materal UI
import { Button, Grid } from '@mui/material';
import { TabContext } from '@mui/lab';

// Local Components
import PrivateLayout from '../../layouts/private_layout'
import styles from "../../styles/RegisterPatient.module.scss";
import SearchPatients from '../../modules/patient/TabSearchPatients';


export default function SearchPatient() {
    const router = useRouter()

    const handleSelectedPatient = () => {
        router.push("/process/eval-pilots/steps")
    }

    return (
        <PrivateLayout titlePage="Inicio">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <TabContext value="1" >
                    <SearchPatients />
                </TabContext>
                <Grid item>
                    <Button variant="contained" onClick={handleSelectedPatient} >
                        Seleccionar
                    </Button>
                </Grid>
            </Grid>
        </PrivateLayout>
    )
}
