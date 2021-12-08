import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const GridProcess = () => (
    <Stack spacing={1}>
        <Skeleton variant="rectangular" height={140} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
    </Stack>)

export default function GridAllProcess() {
    return (
        <>
            <GridProcess />
            <GridProcess />
            <GridProcess />
        </>
    )
}
