import { Box } from '@mui/material'
import { ReactNode } from 'react'

export function SidebarMenuSection(props: SidebarMenuSectionProps) {
    const { title, children } = props

    return (
        <Box>
            <Box>{title}</Box>
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export interface SidebarMenuSectionProps {
    title: string
    children: ReactNode
}