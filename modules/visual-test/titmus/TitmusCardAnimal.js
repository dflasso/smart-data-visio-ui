//React
import React from 'react'
// Material
import { Card, CardActionArea, Grid } from '@mui/material'
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'
// styles 
import styles from "../../../styles/TitmusStep.module.scss";

export default function TitmusCardAnimal({ animal = "", row = "", animalId = "", onClick, animalSelected = "" }) {
    const isSelected = animalSelected === animalId

    const handleClick = () => {
        if (typeof onClick === "function") {
            onClick({
                row,
                animalId
            })
        }
    }

    return (
        <Card className={isSelected ? styles.stepCardAnimalRowSelected : styles.stepCardAnimalRow}>
            <CardActionArea onClick={handleClick} >
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item xs={12} className={styles.stepCardAnimalRowDetail} >
                        <h6  >{animal} <br />
                            {isSelected ?
                                <CheckCircle color="success" />
                                :
                                <RadioButtonUnchecked />
                            }
                        </h6>
                    </Grid>
                    <Grid item xs={12} >

                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}
