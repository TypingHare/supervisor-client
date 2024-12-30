import { ReactNode } from 'react'
import { Box, IconButton } from '@mui/material'

export function SidebarMenuSectionItem(props: SidebarMenuSectionItemProps) {
    const { icon, name } = props

    return (
        <Box display="flex" alignItems="center" height="36px" fontSize="1.15rem"
             sx={{
                 cursor: 'pointer',
                 '&:hover': { backgroundColor: 'blue' },
             }}>
            <IconButton>{icon}</IconButton>
            <Box display="flex" alignItems="center" ml="0.25rem">{name}</Box>
        </Box>
    )
}

export interface SidebarMenuSectionItemProps {
    icon: ReactNode
    name: string
}