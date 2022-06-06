import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./repositories/user.repository";
import { responseData, userType, userTypeFind, userTypeUpdate } from "./type/user.type";
import * as bcrypt from 'bcrypt';
import { UpdateResult } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ){}

  async createUser(createUserDto: CreateUserDto) {
    try {
      let password = await bcrypt.hash(createUserDto.Password , 10);
      createUserDto.Password = password;
      let newUser = await this.userRepository.save(createUserDto);
      return newUser
      
    } catch (error) {
      console.log(error);
      throw error
    }

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
      return user ? user : null
    } 
    catch (error) {
      console.log("findOneById Error: ",error);
      return null
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<responseData> {
    try {
      if(updateUserDto.Password !== undefined) {
        let password:string = await bcrypt.hash(updateUserDto.Password,10);
        updateUserDto.Password = password;
      }
      let updateUserResult:UpdateResult = await this.userRepository.update(id,updateUserDto);
      return {
        status: true,
        result: updateUserResult
      }
    } catch (error) {
      return {
        status: false,
        result: error
      }
    }
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
