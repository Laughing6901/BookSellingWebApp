import { GroupMember } from "src/chat/entities/member-group.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
  })
  Avatar: string;

  @Column({
    name: "Password",
    type: "varchar",
    length: 20,
  })
  Password: string;

  @Column({
    name: "Email",
    type: "varchar",
  })
  Email: string;

  @Column({
    name: "Gender",
    type: "varchar",
    length: 6,
  })
  Gender: string;

  @Column({
    name: "DateOfBirth",
    type: "date",
  })
  DateOfBirth: Date;

  @Column({
    name: "Address",
    type: "varchar",
  })
  Address: string;

  @Column({
    name: "PhoneNumber",
    type: "varchar",
  })
  PhoneNumber: string;

  @Column({
    name: "SocketId",
    type: "varchar"
  })
  SocketId: string;

  //Relationship
  @OneToMany(() => GroupMember, (GroupMember) => GroupMember.User)
  GroupMember: GroupMember[];
}
