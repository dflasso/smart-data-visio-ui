import { Card, Grid } from '@mui/material'
import React from 'react'
import CardImageLogo from "./CardImageLogo";
import LoginForm from './loginForm';

export default function CardLogin() {
    return (
        <Grid item xs={12} sm={8} md={5} lg={3}  >
            <Card >
                <CardImageLogo />
                <LoginForm />
            </Card>
        </Grid>
    )
}
