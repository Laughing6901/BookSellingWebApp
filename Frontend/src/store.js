import { configureStore } from '@reduxjs/toolkit';
import chatRoomSlice from './ChatRoom/chatRoomSlice';
import collapsedSlice from './Message/collapsedSlice';
import { chatMiddleware, socketConnectMiddleware } from './middleware';

// create redux store
// redux store save and manage all reducer
export const store = configureStore({
  reducer: {
    chatRoom: chatRoomSlice,
    collapsed: collapsedSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      // crashMiddleware, 
      // loggerMiddleware, 
      socketConnectMiddleware,
      // chatMiddleware,
    ]);
  }

})
