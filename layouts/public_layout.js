import Head from 'next/head'
import React from 'react'
import styles from '../styles/PublicLayout.module.scss'


export default function PublicLayout({ children, titlePage = "", titleTab = "", msgFooter = "© 2021 Smart Data Visio", currentPage = 0 }) {
    return (
        <>
            <Head>
                <title> Smart Data Visio - {titleTab} </title>
            </Head>
            <main className={styles.mainContent} >{children}</main>
            <footer className={styles.footerContent} >{msgFooter}</footer>
        </>
    )
}
