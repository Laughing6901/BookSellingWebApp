import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("GroupChat")
export class GroupChat {
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
}
