export type userFindOneType = {
  test: string;
};

export type findAllUserType = userFindOneType[];

export type userType = {
  UserId: number;
  FirstName: string;
  LastName: string;
  Avatar: string;
  Password: string;
  Email: string;
  Gender: string;
  DateOfBirth: Date;
  Address: string;
  PhoneNumber: string;
  SocketId: string;
}

export type userTypeNotPass = {
  UserId: number;
  FirstName: string;
  LastName: string;
  Avatar: string;
  Email: string;
  Gender: string;
  DateOfBirth: Date;
  Address: string;
  PhoneNumber: string;
  SocketId: string;
}
