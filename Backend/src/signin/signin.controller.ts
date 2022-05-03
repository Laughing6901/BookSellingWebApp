import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SigninService } from './signin.service';
import { SigninDto } from './dto/create-signin.dto';
import { UpdateSigninDto } from './dto/update-signin.dto';
import { LocalGuard } from 'src/auth/guard/local.guard';

@Controller('signin')
export class SigninController {
  constructor(private readonly signinService: SigninService) {}

  @UseGuards(LocalGuard)
  @Post()
  signin(@Body() signinData: SigninDto) {
    return this.signinService.signin(signinData);
  }
}
