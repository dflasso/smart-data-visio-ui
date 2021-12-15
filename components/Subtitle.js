import { Divider, Icon } from '@mui/material'
import React from 'react'
import styles from "../styles/Subtitle.module.scss";

export default function Subtitle({ title = "", icon }) {
    return (
        <div className={styles.container}>
            {(icon != null) ? <Icon className={styles.iconSubtitle} >{icon}</Icon> : null}
            <h5 className={styles.subtitle}>{title}</h5>
            <Divider />
        </div>
    )
}
