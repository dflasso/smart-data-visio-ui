import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'

export default function HeaderAdminUsers() {
    const router = useRouter()

    const redirectToPageUserRegister = () => {
        router.push('/securiy/user-register')
    }

    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" marginTop={10} paddingLeft={5} >
            <Card>
                <Button variant='contained' onClick={redirectToPageUserRegister} > Registrar Usuario </Button>
            </Card>
        </Grid>
    )
}
