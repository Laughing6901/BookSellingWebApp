import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async test(): Promise<any> {
    let result = await this.authService.validate("test", "try");
    if(result === null) {
      console.log(result);
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        errorMessage: {
          dev: "wrong password",
          user: "wrong input"
        }
      }, HttpStatus.UNAUTHORIZED)
    }
  }
}