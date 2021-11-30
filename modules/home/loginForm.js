import React, { useState } from 'react'
import { Button, CardContent, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from "../../styles/LoginForm.module.scss";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const handleChange = (inputName) => (event) => {

    }

    const handleClickShowPassword = () => {
        setShowPassword(value => !value)
    }

    return (
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" className={styles.titleForm}>
                Iniciar Sesión
            </Typography>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <label className={styles.labelInputs}> Nombre de Usuario</label>
                    </Grid>
                    <Grid item xs={12} >
                        <OutlinedInput
                            type={'password'}
                            value={password}
                            onChange={handleChange('username')}
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <label className={styles.labelInputs}> Contraseña</label>
                    </Grid>
                    <Grid item xs={12} >
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleChange('password')}
                            fullWidth
                            size="small"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} alignContent="center" >
                        <Button variant="text">¿Olvidó su Contraseña?</Button>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="contained" >Iniciar Sesión</Button>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    )
}
