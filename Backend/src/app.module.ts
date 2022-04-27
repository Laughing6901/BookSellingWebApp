import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule], 
      useFactory:(configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('HOST') || 'localhost:',
        port: configService.get<number>('PORT') || 3306,
        username: configService.get('USERNAME') || 'root',
        password: configService.get('PASSWORD') || 'root',
        database: configService.get('DATABASE') || 'root',
        entities: ['dist/src/**/*.entity{.ts,.js}'],
        synchronize: false, // true is Unsafe not use for product and migration
        migrations: ['dist/src/migrations/*{.ts,.js}'],
        cli: { migrationsDir: 'src/migrations', },  
      }),
      inject:[ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
