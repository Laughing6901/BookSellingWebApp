import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { GroupMember } from "../entities/member-group.entity";

@Injectable()
@EntityRepository(GroupMember)
//manage group member entity by using repository 
//can use to make query to db via function and apply in other services
export class GroupMemberRepository extends Repository<GroupMember> {

}