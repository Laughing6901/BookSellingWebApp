import {
  Body, Controller, Post
} from "@nestjs/common";
import { CreateSignupDto } from "./dto/signup.dto";
import { SignupService } from "./signup.service";

@Controller("signup")
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  create(@Body() createSignupDto: CreateSignupDto) {
    return this.signupService.create(createSignupDto);
  }
}
