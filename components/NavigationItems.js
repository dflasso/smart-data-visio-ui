import { AccountCircle, Home, Info, Login } from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import React from 'react'
import styles from '../styles/NavigationItems.module.scss'

export const publicPages = {
    home: 0,
    login: 1,
    register: 2,
    about: 3
}

const getStyle = (page, currentPage) => {

    return (page === currentPage) ? styles.itemsNavSelected : styles.itemsNav;
}

export default function NavigationItems({ currentPage = publicPages.home }) {



    return (
        <>
            <MenuItem className={getStyle(publicPages.home, currentPage)}>
                <ListItemIcon>
                    <Home fontSize="small" />
                </ListItemIcon>
                <ListItemText>Inicio </ListItemText>
            </MenuItem>
            <MenuItem className={getStyle(publicPages.login, currentPage)}>
                <ListItemIcon>
                    <Login fontSize="small" />
                </ListItemIcon>
                <ListItemText>Login</ListItemText>
            </MenuItem>
            <MenuItem className={getStyle(publicPages.register, currentPage)}>
                <ListItemIcon>
                    <AccountCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText>Registro</ListItemText>
            </MenuItem>
            <MenuItem className={getStyle(publicPages.about, currentPage)}>
                <ListItemIcon>
                    <Info fontSize="small" />
                </ListItemIcon>
                <ListItemText>Acerca de</ListItemText>
            </MenuItem>
        </>
    )
}
