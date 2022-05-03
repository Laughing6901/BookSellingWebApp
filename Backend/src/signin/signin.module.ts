import { Module } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SigninController } from './signin.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { jwtConstants } from 'src/auth/constant';

@Module({
  imports:[
    UserModule,
    AuthModule,

    //jwt config
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: 60
      }
    }),
  ],
  controllers: [SigninController],
  providers: [
    SigninService,
    // JwtStrategy
  ],
  exports:[SigninService]
})
export class SigninModule {}
