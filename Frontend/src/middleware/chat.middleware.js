
//host socket server
const host = 'http://localhost:3006';

//middleware handle connect, send and receive socket
const chatMiddleware = store => {
  return next => (action, socket) => {
    //get that socket init or not adn is connected or not
    const isConnectionEstablished =socket.connected && store.getState().chatRoom.isConnected;
    console.log("isConnect:", isConnectionEstablished);
    console.log(socket.connected);

    if(isConnectionEstablished) {
      socket.emit("messages", "test messages was sent");
      socket.on("messages-received", (msg) => {
        console.log(msg)
      })
    }
      // if (chatActions.submitMessage.match(action) && isConnectionEstablished) {
    //   socket.emit(ChatEvent.SendMessage, action.payload.content);
    // }

    //pass to the next action
    next(action);
  }
}

 
export default chatMiddleware;