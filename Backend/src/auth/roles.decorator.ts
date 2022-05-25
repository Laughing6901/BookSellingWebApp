import { SetMetadata } from "@nestjs/common";
import { GroupChatRole } from '../chat/type/group-chat.type'

//using setMetadata for declare decorator @Roles() for authorization
export const Roles = (...roles: string[]) => SetMetadata('roles', GroupChatRole)