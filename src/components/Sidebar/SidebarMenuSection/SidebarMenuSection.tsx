import { Box } from '@mui/material'
import { ReactNode } from 'react'

export function SidebarMenuSection(props: SidebarMenuSectionProps) {
  const { title, isSidebarExpanded, children } = props

  return (
    <Box>
      <Box
        fontSize="0.9rem"
        p="0 1rem 0.25rem"
        height="16px"
        fontWeight="bold"
        color="#666"
      >
        {isSidebarExpanded ? title : ' '}
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}

export interface SidebarMenuSectionProps {
  title: string
  isSidebarExpanded: boolean
  children: ReactNode
}
