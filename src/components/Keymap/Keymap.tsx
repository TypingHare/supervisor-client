import { Box } from '@mui/material'
import { ElementId } from '../../common/constants/ElementId.ts'

export function Keymap() {
    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase()

        if (key === ' ' || key == 'i') {
            if (document.activeElement?.id === ElementId.CONTROL_BAR_INPUT) {
                return
            }

            event.preventDefault()
            getControlBarInput().focus()
        }

        if (key === 'escape') {
            event.preventDefault()
            if (document.activeElement?.id === ElementId.CONTROL_BAR_INPUT) {
                getControlBarInput().blur()
            }
        }

        if (key === 's') {
            if (document.activeElement?.id === ElementId.CONTROL_BAR_INPUT) {
                return
            }

            event.preventDefault()
        }
    })

    return (
        <Box aria-label="Keymap" hidden />
    )
}

function getControlBarInput(): HTMLInputElement {
    const element = document.getElementById(ElementId.CONTROL_BAR_INPUT)
    if (!element) {
        console.error(`Element with such ID not found: ${ElementId.CONTROL_BAR_INPUT}`)
    }

    return element as HTMLInputElement
}