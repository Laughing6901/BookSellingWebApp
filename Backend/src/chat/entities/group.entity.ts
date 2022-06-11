import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { GroupMember } from "./member-group.entity";

@Entity("GroupChat")
export class GroupChat {
  //Table column config
  @PrimaryGeneratedColumn({
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
    nullable: true,
  })
  Avatar: string;

  //Relationship
  @OneToMany(() => GroupMember, (GroupMember) => GroupMember.GroupChat)
  GroupMember: GroupMember[];
}
