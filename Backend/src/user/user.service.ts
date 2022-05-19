import { Injectable } from "@nestjs/common";
import {
  signinUserTestType,
  signinUserType,
} from "src/signin/type/signin-user.type";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(username: string): Promise<signinUserTestType | null> {
    try {
      //data to test function findOne
      let user: signinUserTestType = {
        username: "test",
        password: "test",
        id: "123",
      };
      if (username === "test") {
        return user;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
