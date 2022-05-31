import {
  Body, Controller, Post, UseGuards
} from "@nestjs/common";
import { LocalGuard } from "src/auth/guard/local.guard";
import { SigninDto } from "./dto/signin.dto";
import { SigninService } from "./signin.service";

@Controller("signin")
export class SigninController {
  constructor(private readonly signinService: SigninService) {}

  @UseGuards(LocalGuard)
  @Post()
  signin(@Body() signinData: SigninDto) {
    return this.signinService.signin(signinData);
  }
}
