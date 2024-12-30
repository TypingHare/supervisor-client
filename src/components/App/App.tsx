import { Box } from '@mui/material'
import { Sidebar } from '../Sidebar'
import { MainContent } from '../MainContent'

export function App() {
    return (
        <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <Sidebar sx={{ width: '64px', height: '100%', backgroundColor: 'red' }} />
            <MainContent sx={{ flexGrow: '1', height: '100%', backgroundColor: 'green' }} />
        </Box>
    )
}
