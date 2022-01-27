import { ContentPasteSearchRounded } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import useTestLangCards from '../../../hooks/useTestLangCards'

export default function LangTaskAnalysis({ id_test, typeBtn = "normal" }) {

    const resolveTypeBtn = () => {
        if (typeBtn === "normal") {
            return (
                <Button variant="outlined" startIcon={<ContentPasteSearchRounded />} size="small" fullWidth>
                    Ver los Resultados
                </Button>
            )
        } else {
            return (<IconButton component="span" >
                <ContentPasteSearchRounded />
            </IconButton>)
        }
    }

    return resolveTypeBtn()
}
