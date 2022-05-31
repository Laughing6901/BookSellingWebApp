export type userFindOneType = {
  test: string;
};

export type findAllUserType = userFindOneType[];

export type userType = {
  UserId: number;
  FirstName: string;
  LastName: string;
  Avatar: string;
  Password?: string;
  Email: string;
  Gender: string;
  DateOfBirth: Date;
  Address: string;
  PhoneNumber: string;
  SocketId: string;
}

export type userTypeUpdate = {
  UserId?: number;
  FirstName?: string;
  LastName?: string;
  Avatar?: string;
  Password?: string;
  Email?: string;
  Gender?: string;
  DateOfBirth?: Date;
  Address?: string;
  PhoneNumber?: string;
  SocketId?: string;
}

export type userTypeFind = userTypeUpdate

export type emailType = {
  Email: string
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}