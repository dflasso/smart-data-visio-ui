import { useRouter } from 'next/router'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function VisualTestCard({ image, name, url }) {
    const router = useRouter()
    const handleClick = () => router.push(url)

    return (
        <Grid item xs={12} sm={10} md={6} lg={4} xl={3} >
            <Card sx={{ display: 'flex' }}>
                <CardActionArea onClick={handleClick}>
                    <Grid item xs={12} container alignItems="center" justifyContent="center">
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image={image}
                            alt={name}
                        />

                    </Grid>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
