import { BadRequestException, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as nodemailer from 'nodemailer';
import { AuthService } from 'src/auth/auth.service';
import { otpCodeContent } from './content';
import { mailContentType, mailOptionTypes, optCodeSendType } from './type/mail.type';
dotenv.config();
const {EMAIL_USERNAME, EMAIL_PASSWORD} =process.env;


@Injectable()
export class EmailService {
  constructor(
    private authService: AuthService,
  ) {}

  async sendMail(email: string, mailContent: mailContentType): Promise<any> { 
    console.log(EMAIL_USERNAME, EMAIL_PASSWORD);
    console.log(email);
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      service:'gmail',
      auth: {
        user: EMAIL_USERNAME, // username of gmail
        /* 
        password of this gmail
        because 30/5/22 upto now can set less secure for gmail
        so need to config mật khẩu ứng dụng for gmail and nodemailer to access
        */
        pass: EMAIL_PASSWORD, 
      },
  });

  let mailOption:mailOptionTypes = {
    from: `${EMAIL_USERNAME}`, //email username is email
    to: `${email}`, // list of receivers
    subject: mailContent.subject, // Subject line
    html: mailContent.html
  }

  let info = transporter.sendMail(mailOption, (err,data) => {
      if(err) {
          console.log("SentMailErr(): ",err);
          return false
      } else {
          console.log("SentMail(): sent");
          return true
      }
  })
  console.log(info);
  }

  async sendOtpCode(UserId:number, email:string): Promise<string> {
    let codeGenerate: number = Math.floor(Math.random() * (9999-1000+1)) +1000;
    let payload:optCodeSendType = {
      otpCode: codeGenerate,
      sub: UserId
    }
    let codeResponse:string = await this.authService.signJwt(payload);
    let otpContent: mailContentType = otpCodeContent(codeGenerate);
    let sendMail = this.sendMail(email, otpContent);
    return codeResponse;
  }

}