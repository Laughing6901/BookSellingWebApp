import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ChatModule } from "./chat/chat.module";
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";
import { UserModule } from "./user/user.module";
import { MessageModule } from "./message/message.module";
import { APP_GUARD } from "@nestjs/core";
import { RoleGuard } from "./auth/guard/roles.guard";

@Module({
  imports: [
    //setup connect to mysql database
    // forRootAsync make connect to db asynchronously
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      //useFactory like any other asynchronous provider
      //it able to inject dependencies
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get(`${configService.get("NODE_ENV")}_HOST`) || "localhost",
        port: +configService.get<number>("DB_PORT") || 3306,
        username: configService.get("USERNAME") || "root",
        password: configService.get("PASSWORD") || "root",
        database: configService.get("DATABASE") || "root",
        entities: ["dist/src/**/*.entity{.ts,.js}"],
        synchronize: false, // true is Unsafe not use for product and migration
        migrationsRun: true,
        migrations: ["dist/src/migrations/*{.ts,.js}"],
        cli: {
          migrationsDir: "src/migrations",
        },
      }),
      inject: [ConfigService],
    }),

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
  ],

  //add controller
  controllers: [AppController],

  //provider service if it is a part of module or folder or function
  //Module can export all provider they have
  providers: [
    //AppService is a part of AppModule
    AppService,
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
