import React from 'react'
import styles from "../styles/HeaderForms.module.scss";

export default function HeaderForms({ title = "" }) {
    return (
        <div className={styles.container}>
            <h4> {title}  </h4>
        </div>
    )
}
