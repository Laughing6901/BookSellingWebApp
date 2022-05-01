import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

//this class for config local strategies of passport 
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
    ) {
        //call constructor of nearest parent class
        super();

        //can modify specific object by using 
        //super({usernameField: 'email'});
    }

    async validate(username: string, password: string): Promise<any> {
        let user = await this.authService.validate(username, password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user
    }

}