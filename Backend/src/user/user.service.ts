import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./repositories/user.repository";
import { userType, userTypeFind } from "./type/user.type";

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

  async findOneByEmail(Email: string): Promise<userType | null> {
    try {
      let user:userType = await this.userRepository.findOneUser({Email});
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
