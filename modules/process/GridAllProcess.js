// React 
import React, { useState } from 'react'
//Next
import { useRouter } from 'next/router'
// Material Ui
import { Backdrop, Button, Card, CardActionArea, CardMedia, CircularProgress, Grid } from '@mui/material'
//Local Components
import GridAllProcessSkeleton from "./GridAllProcessSkeleton";


export default function GridAllProcess({ process, redirect = true }) {
    const router = useRouter()
    const [openBckdrop, setOpenBckdrop] = useState(false)
    const handleClick = (url) => () => {
        if (redirect) {
            setOpenBckdrop(true)
            router.push(url).finally(() => setOpenBckdrop(false))
        }

    }

    if (!Array.isArray(process)) {
        return <GridAllProcessSkeleton />
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBckdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {process.map(item => (
                <Grid item key={item.id} xs={12} md={6} lg={5} paddingTop={3}>
                    <Card >
                        <CardActionArea onClick={handleClick(item.url)}  >
                            <CardMedia
                                component="img"
                                width='90%'
                                alt={item.name}
                                image={item.imageUrl}
                            />
                        </CardActionArea>

                        <Grid container xs={12} alignItems="center" justifyContent="center" paddingTop={3} marginBottom={3}>
                            <Grid item xs={4} textAlign="center">
                                <Button variant="contained" onClick={handleClick(item.url)} fullWidth>
                                    Iniciar
                            </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </>
    )

}
