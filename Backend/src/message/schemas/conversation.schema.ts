import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'typeorm';
import { Message } from './message.schema';

export type ConversationDocument = Conversation & Document;

@Schema()
export class Conversation {
  //properties of conversation schema or field of document
  @Prop()
  ConversationId: number;

  @Prop()
  UserId: number;

  @Prop({
    type: [{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Messages'
    }]
  })
  Messages: Message[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);