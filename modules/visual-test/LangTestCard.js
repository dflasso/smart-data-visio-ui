import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import LangTaskOptions from './LangTaskOptions'

const optionsKnow = [
    {
        idOption: "1",
        weighing: "450",
        description: "Gato",
        isCorrect: true,
    },
    {
        idOption: "2",
        weighing: "1000",
        description: "Carro",
        isCorrect: true,
    },
    {
        idOption: "3",
        weighing: "350",
        description: "Estrella",
        isCorrect: true,
    }
]

export default function LangTestCard({ statement, purpose, image }) {
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} >
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={statement}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {statement}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {purpose}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <LangTaskOptions optionsKnow={optionsKnow} />
                </CardActions>
            </Card>
        </Grid>
    )
}
