import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    collapsedStatus: false,
    idFromUrl: ''
}

const collapsedSlice = createSlice({
    name: 'collapsed',
    initialState,
    reducers: {
        changeCollapsedValue(state, action) {
            state.collapsedStatus = action.payload
        },

        getIdFromUrl(state, action){
            state.idFromUrl = action.payload
        }
    }
})

export const { changeCollapsedValue, getIdFromUrl } = collapsedSlice.actions
export default collapsedSlice.reducer