
//middleware handle send and receive chat from server
const chatMiddleware = store => {
  return next => (action, socket) => {
    //get that socket init or not adn is connected or not
    const isConnectionEstablished =socket && store.getState().chatRoom.isConnected;
    console.log("isConnect:", isConnectionEstablished);
    // handle for send messages after fist time connect to socket server
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