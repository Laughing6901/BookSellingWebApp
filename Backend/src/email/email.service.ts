import { BadRequestException, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as nodemailer from 'nodemailer';
dotenv.config();
const {EMAIL_USERNAME, EMAIL_PASSWORD} =process.env;

@Injectable()
export class EmailService {
  constructor() {}

  // async sendMail(email: any): Promise<any> { 
  //   console.log(email);
  //   let transporter = nodemailer.createTransport({
  //     service:'gmail',
  //     auth: {
  //       user: EMAIL_USERNAME, // username of gmail
  //       pass: EMAIL_PASSWORD, // password of this gmail
  //     },
  // });
  // let mailOption = {
  //   from: `${EMAIL_USERNAME}`, //email username is email
  //   to: `${email}`, // list of receivers
  //   subject: "[IU Bank] Mã Xác Thực Giao Dịch / Transaction Verification Code", // Subject line
  //   html: `<p style="font-size:16px;">Mã xác thực là </p>`
  // }
  // let info = await transporter.sendMail(mailOption, (err,data) => {
  //     if(err) {
  //         console.log("SentMailErr(): ",err);
  //         throw new BadRequestException('can not sent');
  //     } else {
  //         console.log("SentMail(): sent");
  //     }
  // })
  // return "done"
  // }

  async sendOtpCode(): Promise<any> {
    return "done"
  }

}