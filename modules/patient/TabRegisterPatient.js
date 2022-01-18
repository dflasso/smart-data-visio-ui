import { TabPanel } from '@mui/lab'
import React from 'react'
import FormRegisterPatient from "./FormRegisterPatient";

export default function TabRegisterPatient() {
    return (
        <TabPanel value="2">
            <FormRegisterPatient />
        </TabPanel>
    )
}
