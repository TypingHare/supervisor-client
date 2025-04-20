import { Box } from '@mui/material'
import { ElementId } from '../../common/constants/ElementId.ts'
import hotkeys from 'hotkeys-js'

// Todo: Remove this
export function Keymap() {
  function listenKeyDown(key: string, callback: () => void) {
    hotkeys(key, { keydown: true }, (event) => {
      if (document.activeElement?.id === ElementId.CONTROL_BAR_INPUT) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      callback()
    })
  }

  listenKeyDown('space, i', () => {
    document.getElementById(ElementId.CONTROL_BAR_INPUT)!.focus()
  })

  listenKeyDown('escape', () => {
    document.getElementById(ElementId.CONTROL_BAR_INPUT)!.blur()
  })

  return <Box aria-label="Keymap" hidden />
}
