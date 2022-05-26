import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    trigger: false
}

const siderSlice = createSlice({
    name: 'sider',
    initialState,
    reducers: {
        changeTrigger(state, action){
            state.trigger = action.payload
        }
    }
})

export const {changeTrigger} = siderSlice.actions
export default siderSlice.reducer