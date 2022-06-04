import { GroupMember } from "src/chat/entities/member-group.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../type/user.type";


@Entity("Users")
export class User {
  //Table column config
  @PrimaryGeneratedColumn({
    name: "UserId",
    type: "int",
  })
  UserId: number;

  @Column({
    name: "FirstName",
    type: "varchar",
    length: 20,
  })
  FirstName: string;

  @Column({
    name: "LastName",
    type: "varchar",
    length: 20,
  })
  LastName: string;

  @Column({
    name: "Avatar",
    type: "blob",
    nullable: true
  })
  Avatar: string;

  @Column({
    name: "Password",
    type: "varchar",
    length: 60,
  })
  Password: string;

  @Column({
    name: "Email",
    type: "varchar",
  })
  Email: string;

  @Column({
    name: "Gender",
    type: "enum",
    enum: Gender,
    default: Gender.MALE,
  })
  Gender: string;

  @Column({
    name: "DateOfBirth",
    type: "date",
    nullable: true
  })
  DateOfBirth: Date;

  @Column({
    name: "Address",
    type: "varchar",
    nullable: true
  })
  Address: string;

  @Column({
    name: "PhoneNumber",
    type: "varchar",
    nullable: true
  })
  PhoneNumber: string;

  @Column({
    name: "SocketId",
    type: "varchar",
    nullable: true
  })
  SocketId: string;
  //Relationship
  @OneToMany(() => GroupMember, (GroupMember) => GroupMember.User)
  GroupMember: GroupMember[];
}
