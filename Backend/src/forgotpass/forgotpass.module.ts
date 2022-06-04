import { Module } from '@nestjs/common';
import { ForgotpassService } from './forgotpass.service';
import { ForgotpassController } from './forgotpass.controller';
import { UserModule } from 'src/user/user.module';
import { EmailService } from 'src/email/email.service';

@Module({
  imports:[UserModule, EmailService],
  controllers: [ForgotpassController],
  providers: [ForgotpassService]
})
export class ForgotpassModule {}
