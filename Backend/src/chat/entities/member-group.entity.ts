import { Injectable } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GroupChatRole } from "../type/group-chat.type";

@Entity("GroupMember")
export class GroupMember {
  @PrimaryGeneratedColumn({
    name: "GroupMemberId",
    type: 'int'
  })
  GroupMemberId;

  @Column({
    name: 'JoinDate',
    type:'datetime'
  })
  JoinDate;

  @Column({
    name:'LeftDate',
    type:'datetime'
  })
  LeftDate;

  @Column({
    name:'Role',
    //set enumtype for db
    type:'enum',
    //set enum validate for db
    enum: GroupChatRole,
    //set default value for column role
    default: GroupChatRole.MEMBER
  })
  Role: GroupChatRole
}