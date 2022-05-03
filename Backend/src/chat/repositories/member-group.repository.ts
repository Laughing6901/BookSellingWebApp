import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { GroupMember } from "../entities/member-group.entity";

@Injectable()
@EntityRepository(GroupMember)
export class GroupMemberRepository extends Repository<GroupMember> {
  
}