import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversationSchema } from './schemas/conversation.schema';
import { MessageSchema } from './schemas/message.schema';

@Module({

  //import module if use other service from other modules
  imports: [
    //config schema for mongodb to use
    MongooseModule.forFeature([
      {name: "Conversation", schema:ConversationSchema},
      {name: "Message", schema: MessageSchema},
    ]),
  ],

  //provider service if it is a part of module or folder or function
  //Module can export all provider they have
  providers: [
    //All modules below is a part of message Module
    MessageGateway, 
    MessageService,
  ],
  
  //export service mean that sharing service with another module to use
  exports:[
    MessageGateway, 
    MessageService,
  ],
})
export class MessageModule {}
