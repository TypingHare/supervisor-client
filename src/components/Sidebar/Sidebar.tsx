import { Box, IconButton } from '@mui/material'
import {
  SidebarMenuSection,
  SidebarMenuSectionItem,
} from './SidebarMenuSection'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export function Sidebar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  function toggleSidebar() {
    setIsSidebarExpanded((it) => !it)
  }

  return (
    <Box
      width={isSidebarExpanded ? '12vw' : '40px'}
      height="100%"
      sx={{ transition: 'width 0.3s' }}
    >
      <IconButton
        aria-label="Toggle sidebar"
        onClick={toggleSidebar}
        sx={{ mb: '1rem' }}
      >
        <MenuIcon />
      </IconButton>
      <SidebarMenuSection title="TRACK" isSidebarExpanded={isSidebarExpanded}>
        <SidebarMenuSectionItem icon={<AccessTimeIcon />} name="Timer" />
        <SidebarMenuSectionItem icon={<AccessTimeIcon />} name="Test" />
      </SidebarMenuSection>
    </Box>
  )
}
