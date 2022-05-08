import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { GroupChat } from "../entities/group.entity";

@Injectable()
@EntityRepository(GroupChat)
//manage group chat entity by using repository 
//can use to make query to db via function and apply in other services
export class GroupChatRepository extends Repository<GroupChat> {

}