import React from 'react'
import CardNavHorizontal from '../../../components/CardNavHorizontal'

export default function Recomendation({ icon = 'description', title = '', recomentationText = "" }) {
    return (
        <CardNavHorizontal iconAvatarHeader={icon} title={title}>
            <p>
                {recomentationText}
            </p>
        </CardNavHorizontal>
    )
}
