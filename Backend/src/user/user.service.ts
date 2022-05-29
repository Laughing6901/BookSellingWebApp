import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./repositories/user.repository";
import { userType } from "./type/find-user.type";

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

  async findOne(email: string): Promise<userType | null> {
    try {
      //data to test function findOne
      let user:userType = await this.userRepository.findOneByEmail(email);
      if (email === user.Email) {
        return user
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }

  async findOneById(id: string): Promise<userType | null> {
    try {
      //data to test function findOne
      let user:userType = await this.userRepository.findOneById(id);
      if (user) {
        return user
      }
      return null;
    } catch (error) {
      console.log("findOneById Error: ",error);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
