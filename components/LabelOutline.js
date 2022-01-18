import { Typography } from '@mui/material';
import React from 'react'
import styles from "../styles/LabelOutline.module.scss";

export default function LabelOutline({ children }) {
    return (
        <div className={styles.containerLabel}>
            <Typography noWrap variant="body2" component="label" > {children} </Typography>
        </div>
    )
}
