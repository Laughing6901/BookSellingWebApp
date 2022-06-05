import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { UserModule } from "../user/user.module";
import { SigninController } from "./signin.controller";
import { SigninService } from "./signin.service";

@Module({
  //import module if use other service from other modules
  imports: [
    UserModule,
    AuthModule,
  ],

  //add controller
  controllers: [SigninController],

  //provider service if it is a part of module or folder or function
  //Module can export all provider they have
  providers: [SigninService],

  //export service mean that sharing service with another module to use
  exports: [SigninService],
})
export class SigninModule {}
