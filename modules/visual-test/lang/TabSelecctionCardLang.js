import React from 'react'
import LtsTraditionalsTestLang from './LtsTraditionalsTestLang';
import TraditionalsFormSearch from '../TraditionalsFormSearch';
import { TabPanel } from '@mui/lab'
import { Grid } from '@mui/material';

export default function TabSelecctionCardLang() {
    return (
        <TabPanel value="2" >
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} >
                <TraditionalsFormSearch />
                <LtsTraditionalsTestLang />
            </Grid>
        </TabPanel>
    )
}
