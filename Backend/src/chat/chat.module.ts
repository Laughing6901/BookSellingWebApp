import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatController } from "./chat.controller";
import { ChatService } from "./chat.service";
import { GroupChatRepository } from "./repositories/group.repository";
import { GroupMemberRepository } from "./repositories/member-group.repository";

@Module({
  imports: [TypeOrmModule.forFeature([
    GroupChatRepository,
    GroupMemberRepository
  ])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
