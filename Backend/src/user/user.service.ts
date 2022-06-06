import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./repositories/user.repository";
import { userType, userTypeFind, userTypeUpdate } from "./type/user.type";
import * as bcrypt from 'bcrypt';
import { UpdateResult } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ){}
  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findAll(): Promise<userType[] | null> {
    let listUser:userType[] = await this.userRepository.find();
    if(listUser) {
      return listUser
    }
    return null
  }

  async findOneUser(Info: userTypeUpdate): Promise<userType | null> {
    try {
      let user:userType = await this.userRepository.findOneUser(Info);
      return user ? user : null;
    } 
    catch (error) {
      console.log("findOneByEmail Error: ",error);
      return null
    }
  }

  async findOneById(UserId: number): Promise<userType | null> {
    try {
      //data to test function findOne
      let user:userType = await this.userRepository.findOneUser({UserId});
      console.log(user);
      return user ? user : null
    } 
    catch (error) {
      console.log("findOneById Error: ",error);
      return null
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<UpdateResult | boolean> {
    try {
      if(updateUserDto.Password !== undefined) {
        let password:string = await bcrypt.hash(updateUserDto.Password,10);
        updateUserDto.Password = password;
      }
      let updateUserResult:UpdateResult = await this.userRepository.update(id,updateUserDto);
      return updateUserResult
    } catch (error) {
      console.log("update: ", error)
      return false
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
