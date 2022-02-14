// React
import React from 'react'
// Materia Ui
import { Alert, Backdrop, Button, CardContent, CircularProgress, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
// Custom Hooks
import useLogin, { typesInput } from "../../hooks/useLogin";
// Styles
import styles from "../../styles/LoginForm.module.scss";

export default function LoginForm() {
    const {
        handleChange,
        handleClickShowPassword,
        showPassword,
        password,
        username,
        handleAuthentication,
        authenticationFailed,
        openBackdrop
    } = useLogin()

    return (
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" className={styles.titleForm}>
                Iniciar Sesión
            </Typography>
            {
                authenticationFailed.show && <Alert severity="error">{authenticationFailed.message}</Alert>
            }
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <label className={styles.labelInputs}>Correo electrónico</label>
                    </Grid>
                    <Grid item xs={12} >
                        <OutlinedInput
                            type={'text'}
                            value={username}
                            onChange={handleChange(typesInput.inputUsername)}
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
                            onChange={handleChange(typesInput.inputPassword)}
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
                        <Button variant="contained" onClick={handleAuthentication} >Iniciar Sesión</Button>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    )
}
