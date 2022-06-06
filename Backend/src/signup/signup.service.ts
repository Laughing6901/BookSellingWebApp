import { Injectable } from "@nestjs/common";
import { CreateSignupDto } from "./dto/signup.dto";

@Injectable()
export class SignupService {
  async create(createSignupDto: CreateSignupDto) {
    
  }
}
