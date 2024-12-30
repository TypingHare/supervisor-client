import { Box } from '@mui/material'
import { Sidebar } from '../Sidebar'
import { MainContent } from '../MainContent'

export function App() {
    return (
        <Box display="flex" width="100vw" height="100vh">
            <Sidebar />
            <MainContent flexGrow="1" height="100%" bgcolor="green" />
        </Box>
    )
}
