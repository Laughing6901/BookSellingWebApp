import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { userType } from 'src/user/type/user.type';
import { UserService } from 'src/user/user.service';
import { CreateForgotpassDto } from './dto/forgotpass.dto';

@Injectable()
export class ForgotpassService {
  constructor(
    private userService: UserService,
    private emailService: EmailService,
  ){}
  async forgotPassword(createForgotpassDto: CreateForgotpassDto) {
    try {
      let user: userType = await this.userService.findOneByEmail(createForgotpassDto.email);
      if(!user) {
        return false;
      }
      let sendMail = await this.emailService.sendOtpCode(user.UserId, user.Email);
    } catch (error) {
      console.log(error);
      return false
    }    
  }
}
