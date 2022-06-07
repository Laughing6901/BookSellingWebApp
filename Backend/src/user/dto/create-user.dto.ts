export class CreateUserDto {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

export class UserInformation extends CreateUserDto {
  Avatar: string;
  Gender: string;
  DateOfBirth: Date;
  Address: string;
  PhoneNumber: string;
  SocketId: string;
}