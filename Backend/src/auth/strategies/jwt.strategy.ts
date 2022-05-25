import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "src/auth/constant";

@Injectable()
//this class for config jwt services strategies of passport
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      //call and set constructor from nearest parent
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  //return the information if login successful
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
