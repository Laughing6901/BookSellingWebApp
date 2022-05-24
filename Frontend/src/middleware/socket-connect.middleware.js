import { io } from 'socket.io-client';
import { connectionEstablished, startConnecting } from '../ChatRoom/chatRoomSlice';

//host socket server
const host = 'http://localhost:3006';

//middleware handle connect, send and receive socket
const socketConnectMiddleware = store => {
  //create socket variable
  //type of this socket is: Socket
  //assign socket to global to check that socket are connected to server
  let socket;
  return next => action => {
    //get that socket init or not adn is connected or not
    const isConnectionEstablished = socket && store.getState().chatRoom.isConnected;
    
    //check the action that need connect to socket
    if (startConnecting.match(action)) {
      //connect socket to host server
      socket = io(host);
      
      // hear the message from server when connected to server
      socket.on('connected', (socketId) => {
        //set the connection established
        store.dispatch(connectionEstablished());
        //print the my socketId 
        console.log(socketId);
      })
    }
    
    console.log("connection is established: ",isConnectionEstablished);
    console.log("socket: ",socket);
    console.log("connected:",store.getState().chatRoom.isConnected);
    // if (chatActions.submitMessage.match(action) && isConnectionEstablished) {
    //   socket.emit(ChatEvent.SendMessage, action.payload.content);
    // }
 
    //pass to the next action
    next(action, socket);
  }
}

 
export default socketConnectMiddleware;