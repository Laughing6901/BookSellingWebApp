import { Body, Controller, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { EmailGuard } from 'src/auth/guard/email.guard';
import { CreateForgotpassDto } from './dto/forgotpass.dto';
import { ForgotpassService } from './forgotpass.service';

@Controller('forgotpass')
export class ForgotpassController {
  constructor(private readonly forgotpassService: ForgotpassService) {}

  @Post()
  @UseGuards(EmailGuard)
  async forgotPassword(@Body() createForgotpassDto: CreateForgotpassDto) {
    let forgotPassFunction:string | boolean = await this.forgotpassService.forgotPassword(createForgotpassDto);
    if(!forgotPassFunction) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errorMessage: {
            dev: `can't send otp code`,
            user: "not found",
          },
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      otpCode: forgotPassFunction
    }
  }

}
