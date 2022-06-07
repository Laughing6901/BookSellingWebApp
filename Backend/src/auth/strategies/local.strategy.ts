import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { correctValidateReturnType } from "../type/data-return.type";

//this class for config local strategies of passport
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    //call constructor of nearest parent class
    // super();

    //can modify specific object by using
    super({
      usernameField: 'Email',
      passwordField: 'Password'
    });
  }

  async validate(Email: string, Password: string): Promise<any> {
    console.log("test:", Email, Password);
    let user:correctValidateReturnType = await this.authService.validate(Email,Password);
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          errorMessage: {
            dev: "wrong password",
            user: "wrong input",
          },
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
