import { Card, CardContent, Grid, Typography } from '@mui/material'
import CardImageLogo from "../login/CardImageLogo";

export default function CardLogo() {
    return (
        <Grid item xs={12} sm={8} md={5} lg={3}  >
            <Card >
                <CardImageLogo />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Sistema de apoyo para la toma de decisiones en el proceso de selección de aspirantes a pilotos de Fuerzas Armadas, utilizando técnicas de Smart data
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
