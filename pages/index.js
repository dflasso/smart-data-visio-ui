import React from 'react'
import PublicLayout from '../layouts/public_layout';
import { publicPages } from "../components/NavigationItems"
import { Grid } from '@mui/material';
import CardLogin from '../modules/home/CardLogin';
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <PublicLayout titlePage="Smart Data Visio" titleTab="Inicio" currentPage={publicPages.home}>
      <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.content} >
        <CardLogin />
      </Grid>
    </PublicLayout>
  )
}
