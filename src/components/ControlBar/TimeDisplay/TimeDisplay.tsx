import { Box } from '@mui/material'
import { HourMinuteSecond } from '@typinghare/hour-minute-second'

export function TimeDisplay(props: TimeDisplayProps) {
    const { time } = props

    return (
        <Box fontSize="1.5rem">
            {
                time.toString()
            }
        </Box>
    )
}

export interface TimeDisplayProps {
    time: HourMinuteSecond
}