import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { ChatModule } from "./chat/chat.module";
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";
import { UserModule } from "./user/user.module";
import { MessageModule } from "./message/message.module";
import { APP_GUARD } from "@nestjs/core";
import { RoleGuard } from "./auth/guard/roles.guard";
import { ForgotpassModule } from './forgotpass/forgotpass.module';
import { EmailModule } from './email/email.module';
import typeOrmConfig from "ormconfig";

@Module({
  imports: [
    //setup connect to mysql database
    // forRootAsync make connect to db asynchronously
    TypeOrmModule.forRoot(typeOrmConfig),
    //setup mongodb
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri:
          configService.get<string>("MONGODB_URI") ||
          "mongodb://localhost/nest",
      }),
      inject: [ConfigService],
    }),

    // setup for using global for config module
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    //import module if use other service from other modules
    SigninModule,
    SignupModule,
    UserModule,
    ChatModule,
    AuthModule,
    MessageModule,
    ForgotpassModule,
    EmailModule,
  ],

  //add controller
  controllers: [],

  //provider service if it is a part of module or folder or function
  //Module can export all provider they have
  providers: [
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
