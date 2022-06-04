import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { GroupChatRole } from "src/chat/type/group-chat.type";
import { UserService } from "src/user/user.service";

@Injectable()
export class EmailGuard implements CanActivate {
  constructor(
    private userService: UserService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean>{
    const request = context.switchToHttp().getRequest();
    const user =await this.userService.findOneByEmail(request.body.email);
    return user ? true : false
  }
}