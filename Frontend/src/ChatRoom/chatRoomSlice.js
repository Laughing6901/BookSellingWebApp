import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  isEstablishingConnection: false,
  isConnected: false
};
 
const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    startConnecting: (state => {
      state.isEstablishingConnection = true;
    }),
    connectionEstablished: (state => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    }),
  },
});
 
export const { startConnecting, connectionEstablished } = chatRoomSlice.actions;
 
export default chatRoomSlice.reducer;