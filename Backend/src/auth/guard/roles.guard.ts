import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { GroupChatRole } from "src/chat/type/group-chat.type";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    // reflector use to read what metadata that we provide it
    private reflector: Reflector
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    //set to know what is require roles
    const requireRoles:GroupChatRole[] = this.reflector.getAllAndOverride<GroupChatRole[]>('roles', [
      //it try to pull all the metadata and class of full context that we use metadata
      context.getHandler(),
      context.getClass(),
    ]);

    if(!requireRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    return requireRoles.some((role) => user.roles.includes(role));
  }
}