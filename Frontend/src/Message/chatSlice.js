import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  socketId: '',
  messages:[]
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocketId: ((state, action) => {
      state.socketId = action.payload;
      console.log("id:", action.payload);
      localStorage.setItem('socketId', action.payload);
    }),
    removeSocketid: ((state) => {
      state.socketId = ""
    }),
    receiveMessage: ((state, action) => {
      state.messages.push(action.payload);
      console.log(state.messages);
    }),
    sendMessage: ((state, action) => {
      console.log("message sent: ", action.payload);
    }),
    test:((state, action) => {
      state.socketId = "1";
    })
  },
});
 
export const { receiveMessage, test, sendMessage, setSocketId, removeSocketid } = chatSlice.actions;
 
export default chatSlice.reducer;