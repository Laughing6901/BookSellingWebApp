import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn({
    name: 'UserId',
    type: 'int',
  })
  UserId: number;

  @Column({
    name: 'FirstName',
    type: 'varchar',
    length: 20,
  })
  FirstName: string;

  @Column({
    name: 'LastName',
    type: 'varchar',
    length: 20,
  })
  LastName: string;

  @Column({
    name: 'Avatar',
    type: 'blob',
  })
  Avatar: string;

  @Column({
    name: 'Password',
    type: 'varchar',
    length: 20,
  })
  Password: string;

  @Column({
    name: 'Email',
    type: 'varchar',
  })
  Email: string;

  @Column({
    name: 'Gender',
    type: 'varchar',
    length: 6,
  })
  Gender: string;

  @Column({
    name: 'DateOfBirth',
    type: 'date',
  })
  DateOfBirth: Date;

  @Column({
    name: 'Address',
    type: 'varchar',
  })
  Address: string;

  @Column({
    name: 'PhoneNumber',
    type: 'string',
  })
  PhoneNumber: string;
}
