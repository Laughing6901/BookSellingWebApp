import { configureStore } from '@reduxjs/toolkit';
import chatRoomSlice from './ChatRoom/chatRoomSlice';
import rtcSlice from './Message/rtcSlice';
import chatSlice from './Message/chatSlice';
import { chatMiddleware, socketConnectMiddleware } from './middleware';
import loginSlice from './Login/loginSlice';
import registerSlice from './Signup/signupSlice'

// create redux store
// redux store save and manage all reducer
export const store = configureStore({
  reducer: {
    chatRoom: chatRoomSlice,
    RTCSLice: rtcSlice,
    chatMessage: chatSlice,
    authen: loginSlice,
    authenRegister: registerSlice
  },
  //this will apply middleware when action go to reducer following this step 
  //action => middleware1 => middleware 2 => midd... => reducer
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      // crashMiddleware, 
      // loggerMiddleware, 
      socketConnectMiddleware,
      chatMiddleware,
    ]);
  }

})
