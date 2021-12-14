import { Create, GroupAdd, Search } from '@mui/icons-material'
import { TabList } from '@mui/lab'
import { Grid, Tab } from '@mui/material'
import React from 'react'
import useTabsPatients from '../../hooks/useTabsPatients'
import styles from "../../styles/ContentPatient.module.scss";


export default function NavigationPatients() {
    const { handleChangeTap } = useTabsPatients()
    return (
        <>
            <Grid item md={12} lg={12} className={styles.containerNav} sx={{ display: { lg: 'block', xs: 'none', sm: 'none', md: 'block' } }} >

                <TabList onChange={handleChangeTap} aria-label="navigator patients" centered>
                    <Tab icon={<Search />} iconPosition="end" label="Buscar" value="1" wrapped />
                    <Tab icon={<GroupAdd />} iconPosition="end" label="Agregar" value="2" wrapped />
                    <Tab icon={<Create />} iconPosition="end" label="Editar" value="3" wrapped />
                </TabList>

            </Grid>

            <Grid item xs={12} className={styles.containerNav} sx={{ display: { lg: 'none', xs: 'block', sm: 'block', md: 'none' } }} >

                <TabList onChange={handleChangeTap} aria-label="navigator patients" centered>
                    <Tab icon={<Search />} value="1" />
                    <Tab icon={<GroupAdd />} value="2" />
                    <Tab icon={<Create />} value="3" />
                </TabList>

            </Grid>
        </>
    )
}
