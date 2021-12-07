import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import useLayout from "../hooks/useLayout";

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
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(openMenu && { display: 'none' }) }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    {headerTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
