import { Card, CardContent, CardHeader, Icon } from '@mui/material'
import React from 'react'
import styles from "../styles/CardNavHorizontal.module.scss";

export default function CardNavHorizontal({ iconAvatarHeader = 'info', title = "", children }) {


    return (
        <Card className={styles.cardContainer}>
            <CardHeader
                avatar={<Icon>{iconAvatarHeader}</Icon>}
                title={title}
                className={styles.cardHeader}
            />
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
