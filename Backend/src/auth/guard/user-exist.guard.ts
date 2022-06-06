import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class UserExistGuard implements CanActivate {
  constructor(
    private userService: UserService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean>{
    const request = context.switchToHttp().getRequest();
    const user =await this.userService.findOneUser({UserId: +request.params.id});
    return user ? true : false
  }
}