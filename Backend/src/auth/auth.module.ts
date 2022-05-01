import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    //import module if use other service from other module
    UserModule,
    PassportModule,
  ],
  controllers: [
    //add controller
    AuthController
  ],
  providers: [
    //provider service if it is a part of module or folder or function
    //Module can export all provider they have 
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports:[
    //export service mean that sharing service for another module to use
    AuthService],
})
export class AuthModule {}
