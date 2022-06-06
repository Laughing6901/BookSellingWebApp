import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { userType } from "src/user/type/user.type";
import { UserService } from "src/user/user.service";
import { correctValidateReturnType } from "./type/data-return.type";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {}

  //validate function for signin
  //validate user information that exist or not
  //validate that password right or wrong
  async validate(
    email: string,
    password: string,
  ): Promise<correctValidateReturnType | null> {
    try {
      //get user from db
      let user: userType = await this.userService.findOneUser({Email: email});

      //check password match or not
      let isMatchPassword:boolean = user ? await bcrypt.compare(password, user.Password) : false;

      // return result validate
      if (user && isMatchPassword) {
        let {UserId, Email} = user;
        let result: correctValidateReturnType = {UserId, Email}
        return result;
      } else {
        return null;
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }
  
  async signJwt(data: any):Promise<string> {
    try {
      let signData:string = this.jwtService.sign(data);
      return signData
    } catch (error) {
      console.log("sign Error: ", error);
    }
  }
}
