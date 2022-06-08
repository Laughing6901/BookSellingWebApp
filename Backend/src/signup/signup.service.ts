import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { CreateSignupDto } from "./dto/signup.dto";

@Injectable()
export class SignupService {
  constructor(
    private readonly userService: UserService,
  ){}
  async create(createSignupDto: CreateSignupDto):Promise<any> {
    return await this.userService.createUser(createSignupDto);
  }
}
  