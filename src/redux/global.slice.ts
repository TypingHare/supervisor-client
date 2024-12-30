import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Entry } from '../common/model'
import { RootState } from './store.ts'

const globalState = {
    entry: null as Entry | null,
}

export type GlobalState = typeof globalState

const globalSlice = createSlice({
    name: 'global',
    initialState: globalState,
    reducers: {
        setEntry: (state, entry: PayloadAction<GlobalState['entry']>) => {
            state.entry = entry.payload
        },
    },
})

export const selectGlobal = {
    entry: (state: RootState) => state.global.entry,
}

export const operateGlobal = {
    setEntry: globalSlice.actions.setEntry,
}

export const globalReducer = globalSlice.reducer