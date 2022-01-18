import React from 'react'

import styles from "../../../styles/LangTasks.module.scss";

export default function StateTaskLang({ state }) {
    return (
        <div className={styles.celdTablePending}>
            {state}
        </div>
    )
}
