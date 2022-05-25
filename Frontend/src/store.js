import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import chatRoomSlice from './ChatRoom/chatRoomSlice';
import chatMiddleware from './middleware/chat.middleware';
import crashMiddleware from './middleware/crash.middleware';
import loggerMiddleware from './middleware/logger.middleware';
// create redux store
// redux store save and manage all reducer
export const store = configureStore({
  reducer: {
    chatRoom: chatRoomSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([crashMiddleware, loggerMiddleware, chatMiddleware]);
  }

})
