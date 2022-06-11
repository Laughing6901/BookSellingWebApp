import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";

@Controller("chat")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  async findAll() {
    let listUser= await this.chatService.findAll();
      if(!listUser) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            errorMessage: {
              dev: `can't find all group chat data`,
              user: "not found",
            },
          },
          HttpStatus.NOT_FOUND,
        );
      }
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.chatService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(+id, updateChatDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.chatService.remove(+id);
  }
}
