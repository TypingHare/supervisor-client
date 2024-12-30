import { Grid2, IconButton, Input } from '@mui/material'
import { HourMinuteSecond } from '@typinghare/hour-minute-second'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { TimeDisplay } from './TimeDisplay'
import { ElementId } from '../../common/constants/ElementId.ts'

export function ControlBar() {
    function handleStartStopButtonClick() {
        alert('Started!')
    }

    return (
        <Grid2 container spacing={2} width="100%" height="80px" alignItems="center"
               p="0.5rem 0 0.5rem 1.5rem"
               bgcolor="cyan">
            <Grid2 size={10}>
                <Input id={ElementId.CONTROL_BAR_INPUT} fullWidth disableUnderline
                       placeholder="Title" sx={{ fontSize: '2rem' }} />
            </Grid2>
            <Grid2 size={1}>
                <TimeDisplay time={HourMinuteSecond.of(100001920)} />
            </Grid2>
            <Grid2 size={1}>
                <IconButton id={ElementId.CONTROL_BAR__START_STOP_BUTTON}
                            onClick={handleStartStopButtonClick}>
                    <PlayCircleIcon sx={{ fontSize: '3rem' }} />
                </IconButton>
            </Grid2>
        </Grid2>
    )
}