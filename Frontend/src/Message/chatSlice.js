import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  socketId:"",
  messages:""
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocketId: ((state, action) => {
      state.socketId = action.payload;
    }),
    removeSocketid: ((state) => {
      state.socketId = ""
    }),
    receiveMessage: ((state, action) => {
      console.log("dispatch done:" ,action.payload);
      state.messages = action.payload
    }),
    sendMessage: ((state, action) => {
      console.log("message sent: ", action.payload.messages);
    })
  },
});
 
export const { receiveMessage, sendMessage, setSocketId, removeSocketid } = chatSlice.actions;
 
export default chatSlice.reducer;