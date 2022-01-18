import { Menu } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";

import useLayout from "../hooks/useLayout";
import BtnsLftHeader from "./BtnsLftHeader";

/**
 * Renderiza el Header de paginas que necesitan previa autenticacion
 * @author dflasso
 * @param {string} title - titulo a mostrar en el header 
 * @see https://mui.com/components/drawers/
 * @returns  Componente con el header
 */
export default function HeaderPrivatePage({ title = "" }) {
    const { handleDrawerOpen, state, setTitle } = useLayout();
    const { openMenu, headerTitle } = state;

    useEffect(() => {
        setTitle(title)
        return () => { }
    }, [])



    return (
        <AppBar position="fixed" open={openMenu}>
            <Toolbar>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                    <Grid items xs={1} md={1} lg={1}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(openMenu && { display: 'none' }) }}
                        >
                            <Menu />
                        </IconButton>
                    </Grid>
                    <Grid items md={8} lg={10} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}  >
                        <Typography variant="h6" noWrap component="div">
                            {headerTitle}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} md={2} lg={1}>
                        <BtnsLftHeader />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
