import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages:""
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    receiveMessage: ((state, action) => {
      console.log("dispatch done:" ,action.payload.messages);
    }),
    sendMessage: ((state, action) => {
      console.log("message sent: ", action.payload.messages);
    })
  },
});
 
export const { receiveMessage, sendMessage } = chatSlice.actions;
 
export default chatSlice.reducer;