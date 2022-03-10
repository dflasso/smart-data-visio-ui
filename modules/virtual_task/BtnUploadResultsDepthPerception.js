import { Upload } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import useLayout from '../../hooks/useLayout'

import { ownServices } from "../../providers/index";

export default function BtnUploadResultsDepthPerception() {
    const { updateFlagShowBackdrop } = useLayout()



    const handleChange = (event) => {
        console.log(event.target.files[0])

        const formData = new FormData();
        formData.append("file", event.target.files[0])

        updateFlagShowBackdrop({ show: true })
        ownServices.medical_test.ophthalmological.
            virtualTask.depthPerception.uploadResults({
                num_document_patient: "1713265001",
                group_id: "44",
                formData
            })
            .then((data) => console.log(data))
            .catch(error => console.error({ error }))
            .finally(() => updateFlagShowBackdrop({ show: false }))

    }


    return (
        <Button startIcon={<Upload />} variant="contained" component="label"  > Subir archivo
            <input type="file" hidden onChange={handleChange} /></Button>
    )
}
