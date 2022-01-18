import { Create, Info, InsertDriveFile, MoreVert } from '@mui/icons-material';
import { Avatar, Card, Grid, IconButton, Radio } from '@mui/material'
import React from 'react'
import LabelOutline from '../../components/LabelOutline';
import LabelText from '../../components/LabelText';
import styles from "../../styles/ContentPatient.module.scss";

export default function CardDetailPatiend() {
    return (
        <Grid item xs={12} md={12} lg={12}  >
            <Card className={styles.containerCardDetailPatient} >

                <Grid container direction="row" justifyContent="start" spacing={1} alignItems="center" >

                    <Grid item sx={{ display: { lg: 'none', xs: 'flex', sm: 'flex', md: 'flex' } }} sm={2} md={1} alignSelf="center" justifyContent="center" className={styles.dividerDetailPatient}>
                        <Radio />
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'none' } }} lg={1} xl={1} alignSelf="center" justifyContent="center" >
                        <Grid container direction="row" justifyContent="space-between"   >
                            <Grid item className={styles.dividerDetailPatient} >
                                <Radio />
                            </Grid>
                            <Grid item >
                                <Avatar src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} sx={{ display: { lg: 'none', xs: 'flex', sm: 'flex', md: 'none' } }}>
                        <Grid container direction="column"  >
                            <Grid item >
                                <LabelText > Alberto ... <br /> 1700000000 </LabelText>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={3} xl={3} >
                        <LabelOutline > Alberto ...</LabelOutline>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={1} xl={1} textAlign="center" >
                        <LabelOutline > 1700000000</LabelOutline>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'none' } }} lg={1} xl={1} textAlign="center" >
                        <LabelOutline > 22/05/2021 </LabelOutline>
                    </Grid>
                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={2} xl={2} textAlign="center" >
                        <LabelOutline > Militar </LabelOutline>
                    </Grid>
                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={2} lg={1} xl={1} textAlign="center" >
                        <LabelOutline > Aérea </LabelOutline>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={1} lg={1} xl={1} justifyContent="center" >
                        <IconButton aria-label="info" className={styles.iconsBtnsCardDetailPatient} >
                            <Info />
                        </IconButton>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={1} lg={1} xl={1} justifyContent="center" >
                        <IconButton aria-label="info" className={styles.iconsBtnsCardDetailPatient} >
                            <InsertDriveFile />
                        </IconButton>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'flex', xs: 'none', sm: 'none', md: 'flex' } }} md={1} lg={1} xl={1} justifyContent="center" >
                        <IconButton aria-label="info" className={styles.iconsBtnsCardDetailPatient} >
                            <Create />
                        </IconButton>
                    </Grid>

                    <Grid item sx={{ display: { lg: 'none', xs: 'flex', sm: 'flex', md: 'none' } }} xs={1}>
                        <Grid container direction="column" justifyContent="space-between"  >
                            <Grid item >
                                <IconButton aria-label="info" className={styles.iconsBtnsCardDetailPatient} >
                                    <MoreVert />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Card>
        </Grid>
    )
}
