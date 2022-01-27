import { Divider, Icon } from '@mui/material'
import React from 'react'
import styles from "../styles/Subtitle.module.scss";

export const typeSubtitle = {
    h5: 1,
    h4: 2,
    h3: 3,
    h2: 4
}

const SubtitleText = ({ component = typeSubtitle.h5, children }) => {
    switch (component) {
        case typeSubtitle.h5:
            return (<h5 className={styles.subtitle}>{children}</h5>)
        case typeSubtitle.h4:
            return (<h4 className={styles.subtitle}>{children}</h4>)
        case typeSubtitle.h3:
            return (<h3 className={styles.subtitle}>{children}</h3>)
        case typeSubtitle.h2:
            return (<h2 className={styles.subtitle}>{children}</h2>)
        default:
            return (<h5 className={styles.subtitle}>{children}</h5>)
    }
}

export default function Subtitle({ title = "", icon, component = typeSubtitle.h5 }) {


    return (
        <div className={styles.container}>
            {(icon != null) ? <Icon className={styles.iconSubtitle} >{icon}</Icon> : null}
            <SubtitleText component={component}> {title} </SubtitleText>
            <Divider />
        </div>
    )
}
