import { Grid } from '@mui/material'
import React from 'react'
import VisualTestCard from './VisualTestCard'

const test = [
    {
        idVisualTest: "1",
        name: "Lang",
        description: "",
        type: "tradicional",
        image: "https://cdn.shopify.com/s/files/1/0984/9292/files/LogoFirmaR.png?height=628&pad_color=ffffff&v=1549189753&width=1200",
        url: "/visual-tests/traditional-lang"
    }
]

export default function LtsTraditionalsTest({ ltsTest = [] }) {
    return (
        <Grid item xs={12} md={11} lg={11} container alignItems="center" justifyContent="center" spacing={1}>
            {test.map(item => (
                <VisualTestCard image={item.image} name={item.name} key={item.idVisualTest} url={item.url} />
            ))}
        </Grid>
    )
}
