import { Box, BoxProps } from '@mui/material'

export function MainContent(props: BoxProps) {
    return (
        <Box {...props}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                fontSize: '5rem'
            }}>
                <div>
                    I am the main content!
                </div>
            </Box>
        </Box>
    )
}