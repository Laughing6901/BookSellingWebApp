import { configureStore } from '@reduxjs/toolkit';
import chatRoomSlice from './ChatRoom/chatRoomSlice';
import { chatMiddleware, socketConnectMiddleware } from './middleware';
import changeTrigger from "./Message/siderSlice"

// create redux store
// redux store save and manage all reducer
export const store = configureStore({
  reducer: {
    chatRoom: chatRoomSlice,
    sider: changeTrigger
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
