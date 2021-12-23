import { Card, CardContent } from '@mui/material'
import React from 'react'
import styles from "../../../styles/EvalPilots.module.scss";
import TableAllProcessPilotsBody from './TableAllProcessPilotsBody';
import TableAllProcessPilotsFormFilter from './TableAllProcessPilotsFormFilter';
import TableAllProcessPilotsHeader from './TableAllProcessPilotsHeader';

export default function TableAllProcessPilots() {

    return (
        <Card className={styles.containerTable}>
            <CardContent>
                <TableAllProcessPilotsFormFilter />
            </CardContent>
            <CardContent>
                <TableAllProcessPilotsHeader />
                <TableAllProcessPilotsBody />
            </CardContent>
        </Card>
    )
}
