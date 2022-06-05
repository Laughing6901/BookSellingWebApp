import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { EmailGuard } from 'src/auth/guard/email.guard';
import { CreateForgotpassDto } from './dto/forgotpass.dto';
import { ForgotpassService } from './forgotpass.service';

@Controller('forgotpass')
export class ForgotpassController {
  constructor(private readonly forgotpassService: ForgotpassService) {}

  @Post()
  @UseGuards(EmailGuard)
  async forgotPassword(@Body() createForgotpassDto: CreateForgotpassDto) {
    return await this.forgotpassService.forgotPassword(createForgotpassDto);
  }

}
