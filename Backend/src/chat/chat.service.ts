import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateChatDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";
import { GroupChatRepository } from "./repositories/group.repository";
import { GroupMemberRepository } from "./repositories/member-group.repository";

@Injectable()
export class ChatService {
  constructor(
    private groupRepository: GroupChatRepository,
    private memberOfGroupRepository: GroupMemberRepository,
  ){}

  async create(createChatDto: CreateChatDto) {
    try {
      let groupCreated = await this.groupRepository.create({GroupName:"conversation"});
      let groupSave = await this.groupRepository.save(groupCreated);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      let listGroup = await this.groupRepository.find();
      if(listGroup) {
        return listGroup
    }
    return null
    } catch (err) {
      console.log(err);
      return null
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
