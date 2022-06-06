export class CreateUserDto {
  Email: string;
  Password: string;
}

export class UserInformation extends CreateUserDto {
  FirstName: string;
  LastName: string;
  Avatar: string;
  Gender: string;
  DateOfBirth: Date;
  Address: string;
  PhoneNumber: string;
  SocketId: string;
}