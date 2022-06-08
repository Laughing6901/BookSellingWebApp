import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    localStream: null,
    remoteStream: null
}

const rtcSlice = createSlice({
    name: "RTCSLice",
    initialState,
    reducers: {
        setRemoteStream:(state, action) => {
            state.remoteStream = action.payload
        },
        setLocalStream:(state, action) => {
            state.localStream = action.payload
        }
    }
})

export const {setLocalStream, setRemoteStream} = rtcSlice.actions
export default rtcSlice.reducer