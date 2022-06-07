import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from './email.service';

@Module({
  imports:[AuthModule],
  providers: [EmailService],
  //export service mean that sharing service with another module to use
  exports: [EmailService],
})
export class EmailModule {}
