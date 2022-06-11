import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    
}

const rtcSlice = createSlice({
    name: "RTCSLice",
    initialState,
    reducers: {
        
    }
})

export const {setLocalStream, setRemoteStream} = rtcSlice.actions
export default rtcSlice.reducer