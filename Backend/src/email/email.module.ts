import { Module } from '@nestjs/common';
import { EmailService } from './email.service';

@Module({
  providers: [EmailService],
  //export service mean that sharing service with another module to use
  exports: [EmailService],
})
export class EmailModule {}
