import {
  Body, Controller, Post, UseGuards
} from "@nestjs/common";
import { UserCreatedGuard } from "src/auth/guard/user-created.guard";
import { CreateSignupDto } from "./dto/signup.dto";
import { SignupService } from "./signup.service";

@Controller("signup")
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  @UseGuards(UserCreatedGuard)
  async create(@Body() createSignupDto: CreateSignupDto) {
    return this.signupService.create(createSignupDto);
  }
}
