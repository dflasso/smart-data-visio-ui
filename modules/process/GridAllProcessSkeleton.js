import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const GridProcess = () => (
    <Stack spacing={1}>
        <Skeleton variant="rectangular" height={140} width={100} />
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={100} />
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
