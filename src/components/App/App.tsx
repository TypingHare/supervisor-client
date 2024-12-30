import { Box } from '@mui/material'
import { Sidebar } from '../Sidebar'
import { MainContent } from '../MainContent'
import { Keymap } from '../Keymap'

export function App() {
    return (
        <Box display="flex" width="100vw" height="100vh">
            <Keymap />
            <Sidebar />
            <MainContent flexGrow="1" height="100%" bgcolor="green" />
        </Box>
    )
}
