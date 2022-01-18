import { useState } from 'react'

// providers
import { providers } from "../providers";

const backend = providers.backend

export const typesInputs = {
    firstName: "1",
    lastName: "2",
    docIdentification: "3",
    email: "4",
    phone: "5",
    birthday: "6"
}

export default function useFormRegisterPatient({ onSave }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [docIdentification, setDocIdentification] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [birthday, setBirthday] = useState("")

    const [open, setOpen] = useState(false);

    const handleChangeInput = (nameInput) => (event) => {
        if (nameInput === typesInputs.firstName) {
            setFirstName(event.target.value)
        } else if (nameInput === typesInputs.lastName) {
            setLastName(event.target.value)
        } else if (nameInput === typesInputs.docIdentification) {
            setDocIdentification(event.target.value)
        } else if (nameInput === typesInputs.email) {
            setEmail(event.target.value)
        } else if (nameInput === typesInputs.phone) {
            setPhone(event.target.value)
        } else if (nameInput === typesInputs.birthday) {
            setBirthday(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const request = {
            email,
            doc_identification: docIdentification,
            first_name: firstName,
            last_name: docIdentification,
            phone,
            birthday,
            username: email
        }
        if (typeof onSave === "function") {
            setOpen(true)
            backend.patients.save({ request })
                .then(
                    response => {
                        console.log(response)
                        onSave({
                            data: response,
                            error: null,
                            is_successfull: true
                        })
                    }
                ).catch(
                    error => {
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

    return {
        birthday,
        firstName,
        lastName,
        docIdentification,
        email,
        phone,
        handleChangeInput,
        handleSubmit,
        open
    }
}
