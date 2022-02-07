import { useState } from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'

export const typesInput = {
    inputPassword: "1",
    inputUsername: "2",
}

const authenticationFailedInit = {
    show: false,
    message: ""
}

export default function useLogin() {
    const router = useRouter()

    const [openBackdrop, setOpenBackdrop] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [authenticationFailed, setAuthenticationFailed] = useState(authenticationFailedInit);

    const handleChange = (inputName) => (event) => {

        if (inputName === typesInput.inputUsername) {
            setUsername(event.target.value)
        } else if (inputName === typesInput.inputPassword) {
            setPassword(event.target.value)
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(value => !value)
    }


    const handleAuthentication = (event) => {
        event.preventDefault();
        setOpenBackdrop(true)
        signIn("BACKEND_DATA_STEREO", { redirect: false, username, password })
            .then(
                response => {
                    if (response.ok) {
                        router.push('/home').finally(() => { setOpenBackdrop(false) })
                    } else {
                        setOpenBackdrop(false)
                        setAuthenticationFailed({
                            show: true,
                            message: "Correo electrónico o contraseña incorrecta."
                        })
                    }
                }
            ).catch(
                error => {
                    console.error(error)
                    setAuthenticationFailed({
                        show: true,
                        message: "Ocurrio un error interno en el proceso de autenticación."
                    })

                    setOpenBackdrop(false)
                }
            )

    }


    return {
        handleChange,
        handleClickShowPassword,
        showPassword,
        password,
        username,
        handleAuthentication,
        authenticationFailed,
        openBackdrop
    }
}
