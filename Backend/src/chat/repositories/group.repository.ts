import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { GroupChat } from "../entities/group.entity";

@Injectable()
@EntityRepository(GroupChat)
//manage group chat entity by using repository 
export class GroupChatRepository extends Repository<GroupChat> {

}