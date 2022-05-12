import { HttpException, HttpStatus, Logger } from "@nestjs/common";
import {
  MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

//gateway is a peace of networking software or hardware
//that allows data to flow from discrete network to another
//webSocketGateway using web socket open "gateway" to keep connect between clients
//webSocket help to keep realtime communication

//open port 3006 for sending message
@WebSocketGateway(3006,{
  cors:{
    origin: "*",
  }
})

//Obligatory MessageGateway must implements connection, init and disconnect function
export class MessageGateway implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect{
  // constructor(private readonly messageService: MessageService) {}
  @WebSocketServer()
  server: Server
  private logger: Logger = new Logger('MessageGateway');

  //when client connect to gateway, this will log the client id
  async handleConnection(client: Socket) {
    this.logger.log(client.id, 'Connected..............................');
  }

  //when client disconnect to gateway, this will log the client id
  async handleDisconnect(client: Socket) {
    // need handle remove socketId to table
    this.logger.log(client.id, 'Disconnect');
  }

  //handle Initial Gateway 
  async afterInit(client: Socket) {
    this.logger.log(client.id, 'AfterInit..............................');
  }


  //open subcribe "identity" to receive messages from client
  @SubscribeMessage('identity')
  async identity(@MessageBody() data: any): Promise<any> {
    console.log(data);
    //return message to all client
    this.server.emit("identity-received", data);
    return data;
    
  }

  async getDataUserFromToken(client: Socket): Promise<any> {
    const authToken: any = client.handshake?.query?.token;
    try {
      return 'true';
    } catch (ex) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }


}
