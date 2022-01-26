import Head from 'next/head'
import HeaderPrivatePage from '../components/HeaderPrivatePage';
import Loader from '../components/Loader';
import Menu from "../components/Menu";
import { LayoutProvider } from "../contexts/LayoutContext";
import styles from '../styles/PrivateLayout.module.scss'

export default function PrivateLayout({ children, titlePage = "", titleTab = "", msgFooter = "© 2021 Smart Data Visio" }) {
    return (
        <>
            <Head>
                <title> Smart Data Visio - {titleTab} </title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <LayoutProvider>
                <HeaderPrivatePage title={titlePage} />
                <Menu />
                <main className={styles.mainContent}>
                    <Loader />
                    {children}
                </main>
                <footer className={styles.footerContent} >{msgFooter}</footer>
            </LayoutProvider>
        </>
    )
}
