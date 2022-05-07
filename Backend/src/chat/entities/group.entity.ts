import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { GroupMember } from "./member-group.entity";

@Entity("GroupChat")
export class GroupChat {
  //Table column config
  @PrimaryColumn({
    name: "GroupId",
    type: "int",
  })
  GroupId: number;

  @Column({
    name: "GroupName",
    type: "varchar",
  })
  GroupName: string;

  @Column({
    name: "Avatar",
    type: "blob",
  })
  Avatar: string;

  //Relationship
  @OneToMany(() => GroupMember, GroupMember => GroupMember.GroupChat)
  GroupMember: GroupMember[]

}
