import { Module } from "@nestjs/common";
import { SigninService } from "./signin.service";
import { SigninController } from "./signin.controller";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "src/auth/auth.module";
import { jwtConstants } from "src/auth/constant";

@Module({
  
  //import module if use other service from other modules
  imports: [
    UserModule,
    AuthModule,

    //jwt config
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: 60,
      },
    }),
  ],

  //add controller
  controllers: [
    SigninController,
  ],

  //provider service if it is a part of module or folder or function
  //Module can export all provider they have
  providers: [
    SigninService,
  ],

  //export service mean that sharing service with another module to use
  exports: [SigninService],
})
export class SigninModule {}
