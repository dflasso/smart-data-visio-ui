import { CheckCircle, RemoveCircle } from '@mui/icons-material';
import { Chip } from '@mui/material';
import React from 'react'

import { typesStateTask } from "../../../hooks/useTestLangCards";

export default function StateTaskLang({ state }) {

    if (typesStateTask.success === state) {
        return (
            <Chip icon={<CheckCircle />} label="Realizada" color="info" variant="outlined" />
        )
    }

    return (
        <Chip icon={<RemoveCircle />} label="Pendiente" />
    )
}
