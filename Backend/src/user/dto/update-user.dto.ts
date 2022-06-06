import { PartialType } from "@nestjs/mapped-types";
import { UserInformation } from "./create-user.dto";

export class UpdateUserDto extends PartialType(UserInformation) {}
