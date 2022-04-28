import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';

@Module({
  
  
  imports: [
    //setup connect to mysql database
    // forRootAsync make connect to db asynchronously
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule], 
      //useFactory like any other asynchronous provider 
      //it able to inject dependencies
      useFactory:(configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('HOST') || 'localhost:',
        port: +configService.get<number>('PORT') || 3306,
        username: configService.get('USERNAME') || 'root',
        password: configService.get('PASSWORD') || 'root',
        database: configService.get('DATABASE') || 'root',
        entities: ['dist/src/**/*.entity{.ts,.js}'],
        synchronize: false, // true is Unsafe not use for product and migration
        migrations: ['dist/src/migrations/*{.ts,.js}'],
        cli: { 
          migrationsDir: 'src/migrations', 
        },  
      }),
      inject:[ConfigService],
    }),
    
    //setup mongodb
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI') ||'mongodb://localhost/nest',
      }),
      inject: [ConfigService],
    }),

    // setup for using global for config module
    ConfigModule.forRoot({
      isGlobal: true
    }),

    //import module 
    UserModule, 
    ChatModule,
  ],
  controllers: [AppController, UserController, ChatController],
  providers: [AppService],
})
export class AppModule {}
