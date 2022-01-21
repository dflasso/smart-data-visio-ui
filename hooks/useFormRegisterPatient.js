// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

import { useState } from 'react'

// providers
import { providers } from "../providers";

const backend = providers.backend


export default function useFormRegisterPatient({ onSave }) {

    const [open, setOpen] = useState(false);

    const handleSubmit = (data) => {

        const request = {
            ...data,
            username: data.email
        }
        if (typeof onSave === "function") {
            setOpen(true)
            backend.patients.save({ request })
                .then(
                    response => {
                        onSave({
                            data: response,
                            error: null,
                            is_successfull: true
                        })
                    }
                ).catch(
                    error => {
                        console.log(error)
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Ocurrio un error al registrar el paciente',
                        })
                    }
                ).finally(
                    () => setOpen(false)
                )

        }
    }

    const handleGoBack = () => {

        if (typeof onSave === "function") {
            onSave({
                data: null,
                error: null,
                is_successfull: false
            })
        }
    }

    return {
        handleGoBack,
        handleSubmit,
        open
    }
}
