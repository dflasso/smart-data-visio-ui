//React 
import React from 'react'
// Material
import { TabContext } from '@mui/lab'
import { Backdrop, Button, CircularProgress, Grid } from '@mui/material'
// Local components
import SearchPatients from './TabSearchPatients'


//Custom Hooks
import usePageSearchPatient from "../../hooks/usePageSearchPatient";

export default function ContentSearchPatient({ patients }) {
    const {
        handleSelectedPatient,
        checkIfExistPatientSelected,
        openBackdrop,
        handleGoBack
    } = usePageSearchPatient()

    const existPatientSelected = checkIfExistPatientSelected()

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <TabContext value="1" >
                <SearchPatients patients={patients} />
            </TabContext>
            <Grid item xs={12} container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleSelectedPatient} disabled={existPatientSelected} >
                        Seleccionar
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="error" onClick={handleGoBack}  >
                        Regresar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
