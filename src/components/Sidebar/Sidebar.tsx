import { Box, BoxProps } from '@mui/material'
import { SidebarMenuSection } from './SidebarMenuSection'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export function Sidebar(props: BoxProps) {
    return (
        <Box {...props}>
            <SidebarMenuSection title="basic">
                <Box>
                    <AccessTimeIcon />
                    <span>Timer</span>
                </Box>
            </SidebarMenuSection>
        </Box>
    )
}