import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import GridAllProcessSkeleton from "./GridAllProcessSkeleton";
import { useRouter } from 'next/router'

export default function GridAllProcess({ process, redirect = true }) {
    const router = useRouter()
    const handleClick = (url) => () => {
        if (redirect) {
            router.push(url)
        }

    }

    if (!Array.isArray(process)) {
        return <GridAllProcessSkeleton />
    }

    return (
        <>
            {process.map(item => (
                <Grid item key={item.id} xs={12} md={6} lg={4} paddingTop={3}>
                    <Card >
                        <CardActionArea onClick={handleClick(item.url)}  >
                            <CardMedia
                                component="img"
                                height="200"
                                alt={item.name}
                                image={item.imageUrl}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </>
    )

}
