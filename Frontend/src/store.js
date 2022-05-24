import { configureStore } from '@reduxjs/toolkit';
import chatRoomSlice from './ChatRoom/chatRoomSlice';
import socketConnectMiddleware from './middleware/socket-connect.middleware';
import chatMiddleware from './middleware/chat.middleware';
// create redux store
// redux store save and manage all reducer
export const store = configureStore({
  reducer: {
    chatRoom: chatRoomSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      // crashMiddleware, 
      // loggerMiddleware, 
      socketConnectMiddleware,
      chatMiddleware,
    ]);
  }

})