import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { LocalStrategy } from "./strategies/local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { APP_GUARD } from "@nestjs/core";
import { RoleGuard } from "./guard/roles.guard";

@Module({
  //import module if use other service from other module
  imports: [UserModule, PassportModule],
  //add controller
  controllers: [AuthController],
  //provider service if it is a part of module or folder or function
  //Module can export all provider they have
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy, 
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
  //export service mean that sharing service with another module to use
  exports: [AuthService],
})
export class AuthModule {}
