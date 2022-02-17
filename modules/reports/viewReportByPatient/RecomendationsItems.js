import React from 'react'
import CardNavHorizontal from '../../../components/CardNavHorizontal'

export default function RecomendationsItems({ icon = 'description', title = '', recomentationsText = [""] }) {
    return (
        <CardNavHorizontal iconAvatarHeader={icon} title={title}>
            <ul>
                {
                    recomentationsText.map(recomendation => (
                        <li>{recomendation}</li>
                    ))
                }
            </ul>
        </CardNavHorizontal>
    )
}
