import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Message } from "./message.schema";

//create conversation document
export type ConversationDocument = Conversation & Document;

//create schema for mongodb
@Schema()
export class Conversation {
  //properties of conversation schema or field of document
  @Prop()
  ConversationId: number;

  @Prop()
  UserId: number;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages",
      },
    ],
  })
  Messages: Message[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
