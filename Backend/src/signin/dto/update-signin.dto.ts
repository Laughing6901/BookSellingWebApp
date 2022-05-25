import { PartialType } from "@nestjs/mapped-types";
import { SigninDto } from "./create-signin.dto";

export class UpdateSigninDto extends PartialType(SigninDto) {}
