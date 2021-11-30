import React from 'react'
import { AppBar, Grid, Typography } from "@mui/material";
import NavigationItems, { publicPages } from './NavigationItems';
import NavigateItemsPublicMovil from './NavigateItemsPublicMovil';

export default function AppBarPublic({ title = "", currentPage = publicPages.home }) {


    return (
        <AppBar position="static" variant="outlined" elevation={0} >
            <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                <Grid item xs={10} md={6}  >
                    <Typography variant="h5" noWrap component="div" textAlign="center"  >
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'flex' } }} >
                    <NavigationItems currentPage={currentPage} />
                </Grid>
                <Grid item xs={2} md={0} sm={0} lg={0} xl={0} sx={{ display: { xs: 'block', md: 'none' } }}  >
                    <NavigateItemsPublicMovil currentPage={currentPage} />
                </Grid>
            </Grid>
        </AppBar>
    )
}
