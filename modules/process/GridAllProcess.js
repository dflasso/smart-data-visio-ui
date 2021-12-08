import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
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
                <Card key={item.id} >
                    <CardActionArea onClick={handleClick(item.url)}  >
                        <CardMedia
                            component="img"
                            height="140"
                            alt={item.name}
                            image={item.imageUrl}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </>
    )

}
