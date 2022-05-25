import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GroupChatRole } from "../type/group-chat.type";
import { GroupChat } from "./group.entity";

@Entity("GroupMember")
export class GroupMember {
  //Table column config
  @PrimaryGeneratedColumn({
    name: "GroupMemberId",
    type: "int",
  })
  GroupMemberId;

  @Column({
    name: "JoinDate",
    type: "datetime",
  })
  JoinDate;

  @Column({
    name: "LeftDate",
    type: "datetime",
  })
  LeftDate;

  @Column({
    name: "Role",
    //set enumtype for db
    type: "enum",
    //set enum validate for db
    enum: GroupChatRole,
    //set default value for column role
    default: GroupChatRole.MEMBER,
  })
  Role: GroupChatRole;

  //Relationship
  @ManyToOne(() => GroupChat, (GroupChat) => GroupChat.GroupMember)
  GroupChat: GroupChat;

  @ManyToOne(() => User, (User) => User.GroupMember)
  User: User;
}
