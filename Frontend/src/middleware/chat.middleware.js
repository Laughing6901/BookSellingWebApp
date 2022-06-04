
import { connectionEstablished } from '../ChatRoom/chatRoomSlice';
import { receiveMessage, sendMessage } from '../Message/chatSlice';
import ChatEvent from '../Message/messageEvent';
//middleware handle send and receive chat from server
export const chatMiddleware = store => {
  return next => (action, socket) => {
    //get that socket init or not adn is connected or not
    const isConnectionEstablished =socket && store.getState().chatRoom.isConnected;
    console.log("isConnect:", isConnectionEstablished);
    console.log(action.type);
    // handle for send messages after fist time connect to socket server
    switch (action.type) {
      //send messages
      case sendMessage.type:
        socket.emit(`${ChatEvent.SendMessage}`, action.payload.messageInput);
        break;
      //receive messages
      case connectionEstablished.type:
        console.log(action.type);
        socket.on(`${ChatEvent.ReceiveMessage}`, (msg) => {
          console.log(msg);
        })
        break;
      
      default:
        break;
  }
    //pass to the next action
    next(action);
  }
}