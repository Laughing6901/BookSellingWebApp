import { Injectable } from '@nestjs/common';
import { signinUserTestType, signinUserType } from 'src/signin/type/signin-user.type';
import { UserService } from 'src/user/user.service';
import { correctValidateReturnType } from './type/data-return.type';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    //validate function for signin 
    async validate(username: string, password: string): Promise<correctValidateReturnType | null>
    {
        try {
            //user test function 
            let user: signinUserTestType = await this.userService.findOne(username);

            if(user && user.password == password) {
                const {password, ...result} = user;
                return result
            } else {
                return null
            }
        } catch (error) {
            console.log("error: ",error);
        }
    }
}
