import { Controller, Get, HttpException, HttpStatus, Request } from "@nestjs/common";
import { GroupChatRole } from "src/chat/type/group-chat.type";
import { AuthService } from "./auth.service";
import { Roles } from "./roles.decorator";
import { correctValidateReturnType } from "./type/data-return.type";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @Roles(GroupChatRole.ADMIN)
  async test(@Request() req ): Promise<any> {
    return "done"
    
    
    // let result: correctValidateReturnType = await this.authService.validate("test@gmail.com", "try");
    // if (result === null) {
    //   console.log(result);
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.UNAUTHORIZED,
    //       errorMessage: {
    //         dev: "wrong password",
    //         user: "wrong input",
    //       },
    //     },
    //     HttpStatus.UNAUTHORIZED,
    //   );
    // }
  }
}
