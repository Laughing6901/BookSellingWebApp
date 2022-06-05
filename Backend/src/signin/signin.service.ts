import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { correctValidateReturnType } from "src/auth/type/data-return.type";
import { SigninDto } from "./dto/signin.dto";
import { signinUserReturnType } from "./type/signin-user.type";

@Injectable()
export class SigninService {
  constructor(
    //create object and initial value for fields
    //initial class AuthService to field authService and just read only
    private readonly authService: AuthService,
  ) {}

  async signin(signinData: SigninDto): Promise<any> {
    try {
      //validate user with data in db
      let user:correctValidateReturnType = await this.authService.validate(
        signinData.email,
        signinData.password,
      );
      //auto assign payload because using guard to check data before signin function run
      let payload: signinUserReturnType = {
        username: user.Email,
        sub: `${user.UserId}`,
      };
      let signData:string = await this.authService.signJwt(payload);
      return {
        accessToken: signData,
      };
    } catch (error) {
      console.log("signin error: ",error);
    }
  }
}
