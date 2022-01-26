// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

import { useState } from 'react'

// providers
import { providers } from "../providers";
import { buildOptionsToAutocompleteFiltere, defaultFilterCallbakRanks, militaryRank } from '../constants/professions';
import Languages from '../constants/Languages';


// validations
import { validarCedula } from "../util/validateDocuments";
import { buildCurrentDateSimpleFormat } from '../util/ParserDate';

const backend = providers.backend

const optionalDataInit = {
    useEyeglasses: 'N',
    profesion: "",
    force: "",
    grade: "",
}

export const initForm = {
    selectedDocument: 'C',
    email: '',
    doc_identification: '',
    first_name: '',
    last_name: '',
    phone: '',
    birthday: '',
    diseases: '',
}

export default function useFormRegisterPatient({ onSave, recoveryPatient = false }) {
    const [optionalData, setoptionalData] = useState(optionalDataInit)
    const [open, setOpen] = useState(false);
    const [existPatient, setExistPatient] = useState(recoveryPatient);

    const handleSubmit = (data) => {
        let jobInformation = {
            profesion: "",
            force: "",
            grade: "",
        }
        try {
            jobInformation.profesion = optionalData.profesion.label_spanish
            jobInformation.force = optionalData.force.label_spanish
            jobInformation.grade = optionalData.grade.label_spanish
        } catch (error) {
            console.error(error)
        }

        const request = {
            ...data,
            username: data.email,
            ...jobInformation,
            eyeglasses: {
                id_eyeglasses: "1",
                use: optionalData.useEyeglasses === 'N' ? false : true,
                measurement: 0.0,
                started_use_at: buildCurrentDateSimpleFormat()
            },
            diseases: [{
                id_diseases: "1",
                name: data.diseases,
                indications: "",
                observations: ""
            }]
        }

        if (typeof onSave === "function") {
            setOpen(true)
            if (existPatient && typeof request.id !== "undefined" && request.id !== null) {
                /**
                 * Update Patient
                 */
                backend.patients.update({ request })
                    .then(handleSuccessSubmit)
                    .catch(handleErrorSubmit)
                    .finally(() => setOpen(false))
            } else {
                /**
                 * Create patient
                 */
                backend.patients.save({ request })
                    .then(handleSuccessSubmit)
                    .catch(handleErrorSubmit)
                    .finally(() => setOpen(false))
            }
        }
    }

    const handleSuccessSubmit = (response) => {
        if (typeof onSave === "function") {
            onSave({
                data: response,
                error: null,
                is_successfull: true
            })
        }
    }

    const handleErrorSubmit = (error) => {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrio un error al registrar el paciente',
        })
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

    const handleOnChangeOptionalData = (nameInput) => (value) => {
        if (nameInput === 'useEyeglasses') {
            setoptionalData({
                ...optionalData,
                [nameInput]: value.target.checked ? 'S' : 'N'
            })
        } else if (nameInput === 'profesion') {
            setoptionalData({
                ...optionalData,
                force: null,
                grade: null,
                [nameInput]: value
            })
        } else {
            setoptionalData({
                ...optionalData,
                [nameInput]: value
            })
        }

    }


    const showForces = () => {
        try {

            return optionalData.profesion.label_spanish === "Militar"
        } catch (error) {
            return false
        }
    }

    const showRanksMilitaries = () => {
        try {
            return (typeof optionalData.force.label_spanish === "string")
        } catch (error) {

        }
        return false
    }

    const tryLoadRanksMilitaries = () => {
        try {

            if (typeof optionalData.force.label_spanish === "string") {

                const lts = buildOptionsToAutocompleteFiltere({
                    ltsOptions: militaryRank,
                    language: Languages.spanish,
                    callbackFilter: defaultFilterCallbakRanks({ name: optionalData.force.label_spanish })
                })
                return lts
            }
        } catch (error) {

        }
        return []
    }

    const handleOnBlur = (doc_identification = "", formik) => () => {
        let validCI = validarCedula(doc_identification)

        if (validCI) {
            setOpen(true)
            backend.patients.find_by_num_document({ num_document: doc_identification })
                .then(response => {
                    setExistPatient(true)
                    const values = {
                        selectedDocument: 'C',
                        email: '',
                        doc_identification: '',
                        first_name: '',
                        last_name: '',
                        phone: '',
                        birthday: '',
                        diseases: '',
                        ...response
                    }
                    formik.setValues(values)
                })
                .finally(() => setOpen(false))
        }
    }


    return {
        handleGoBack,
        handleSubmit,
        handleOnChangeOptionalData,
        optionalData,
        showForces,
        showRanksMilitaries,
        tryLoadRanksMilitaries,
        setOpen,
        open,
        setExistPatient,
        existPatient,
        handleOnBlur
    }
}
