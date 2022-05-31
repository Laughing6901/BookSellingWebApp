import { Injectable } from "@nestjs/common";
import { CreateSignupDto } from "./dto/signup.dto";

@Injectable()
export class SignupService {
  create(createSignupDto: CreateSignupDto) {
    return "This action adds a new signup";
  }
}
