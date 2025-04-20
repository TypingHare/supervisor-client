import { Box, BoxProps } from '@mui/material'
import { ControlBar } from '../ControlBar'

export function MainContent(props: BoxProps) {
  return (
    <Box {...props}>
      <Box>
        <ControlBar />
      </Box>
    </Box>
  )
}
