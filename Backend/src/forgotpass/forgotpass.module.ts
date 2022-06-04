import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { UserModule } from 'src/user/user.module';
import { ForgotpassController } from './forgotpass.controller';
import { ForgotpassService } from './forgotpass.service';

@Module({
  imports:[UserModule, EmailModule],
  controllers: [ForgotpassController],
  providers: [ForgotpassService]
})
export class ForgotpassModule {}
