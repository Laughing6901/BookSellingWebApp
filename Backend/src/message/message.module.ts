import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversationSchema } from './schemas/conversation.schema';
import { MessageSchema } from './schemas/message.schema';

@Module({
  imports: [
    //config mongodb for schema
    MongooseModule.forFeature([
      {name: "Conversation", schema:ConversationSchema},
      {name: "Message", schema: MessageSchema},
    ]),
  ],
  providers: [MessageGateway, MessageService]
})
export class MessageModule {}
