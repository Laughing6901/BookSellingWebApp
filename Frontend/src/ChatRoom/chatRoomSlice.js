import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  isEstablishingConnection: false,
  isConnected: false
};
 
const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    //connect to socket server
    startConnecting: (state => {
      state.isEstablishingConnection = true;
    }),
    //set up connection established
    connectionEstablished: (state => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    }),
    //disconnect to socket server
    disconnect:(state => {
      state.isConnected = false;
      state.isEstablishingConnection = false;
    }),
  },
});
 
export const { startConnecting, connectionEstablished } = chatRoomSlice.actions;
 
export default chatRoomSlice.reducer;