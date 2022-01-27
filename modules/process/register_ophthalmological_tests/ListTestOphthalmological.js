// React 
import React from 'react'
// Material UI
import { CheckBoxRounded, IndeterminateCheckBox } from '@mui/icons-material'
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
// styles
import styles from "../../../styles/TestOphthalmologicalProcess.module.scss"
// Custom hook
import { useListTestOphthalmological } from '../../../hooks/useTestOphthalmologicalProcess'

export default function ListTestOphthalmological() {
    const { checkIfTestIsCurrent, checkIfLangTestFinished, checkIfIshiharaTestFinished } = useListTestOphthalmological()
    return (
        <>
            <List
                component="nav"
                subheader={
                    <ListSubheader component="div" id="classic-test" className={styles.HeaderListTest}>
                        Pruebas Clásicas
                    </ListSubheader>
                }
            >
                <ListItemButton className={checkIfTestIsCurrent('1') && styles.ListTestItem} >
                    <ListItemIcon>
                        {checkIfLangTestFinished() ? < CheckBoxRounded color="success" /> : <IndeterminateCheckBox />}
                    </ListItemIcon>
                    <ListItemText
                        primary="Lang"
                    />
                </ListItemButton>
                <ListItemButton className={checkIfTestIsCurrent('2') && styles.ListTestItem}>
                    <ListItemIcon>
                        {checkIfIshiharaTestFinished() ? < CheckBoxRounded color="success" /> : <IndeterminateCheckBox />}
                    </ListItemIcon>
                    <ListItemText
                        primary="Ishihara"
                    />
                </ListItemButton>
                <ListItemButton className={checkIfTestIsCurrent('3') && styles.ListTestItem} >
                    <ListItemIcon>
                        <IndeterminateCheckBox />
                    </ListItemIcon>
                    <ListItemText
                        primary="Titmus"
                    />
                </ListItemButton>
            </List>
            <List
                component="nav"
                subheader={
                    <ListSubheader component="div" id="virtual-test" className={styles.HeaderListTest}>
                        Tareas Virtuales
                    </ListSubheader>
                }
            >
                <ListItemButton className={checkIfTestIsCurrent('4') && styles.ListTestItem} >
                    <ListItemIcon>
                        <IndeterminateCheckBox />
                    </ListItemIcon>
                    <ListItemText
                        primary="Visión estereoscópica"
                    />
                </ListItemButton>
                <ListItemButton className={checkIfTestIsCurrent('5') && styles.ListTestItem} >
                    <ListItemIcon>
                        <IndeterminateCheckBox />
                    </ListItemIcon>
                    <ListItemText
                        primary="Percepción visual de profundidad"
                    />
                </ListItemButton>
                <ListItemButton className={checkIfTestIsCurrent('6') && styles.ListTestItem} >
                    <ListItemIcon>
                        <IndeterminateCheckBox />
                    </ListItemIcon>
                    <ListItemText
                        primary="Percepción visual de color"
                    />
                </ListItemButton>
                <ListItemButton className={checkIfTestIsCurrent('7') && styles.ListTestItem} >
                    <ListItemIcon>
                        <IndeterminateCheckBox />
                    </ListItemIcon>
                    <ListItemText
                        primary="Campo Visual"
                    />
                </ListItemButton>
            </List>
        </>
    )
}
