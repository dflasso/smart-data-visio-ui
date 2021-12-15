import { TabPanel } from '@mui/lab'
import React from 'react'
import FormRegisterPatient from "./FormRegisterPatient";

export default function TabEditPatient() {
    return (
        <TabPanel value="3">
            <FormRegisterPatient />
        </TabPanel>
    )
}
