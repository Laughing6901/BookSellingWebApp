import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  //properties of conversation schema or field of document
  @Prop()
  MessageId: number;

  @Prop()
  UserId: number;
  
  @Prop()
  ConversationId: number;

  @Prop()
  Messsage: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);