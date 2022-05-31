import { SetMetadata } from "@nestjs/common";
import { GroupChatRole } from '../chat/type/group-chat.type'

//using setMetadata for declare decorator @Roles() for authorization
//...roles: rest parameter
//...roles: GroupChatRole[] will get all params in GroupChatRole[]
export const Roles = (...roles: GroupChatRole[]) => SetMetadata('roles', roles);