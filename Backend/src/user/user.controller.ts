import {
  Body, Controller, Delete, Get, HttpException,
  HttpStatus, Param, Patch, Post, UseGuards
} from "@nestjs/common";
import { JwtGuard } from "src/auth/guard/jwt.guard";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { userType, userTypeNotPass } from "./type/find-user.type";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @UseGuards(JwtGuard)
  @Get()
  async findAll() {
    let listUser: userType[] = await this.userService.findAll();
    if(!listUser) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errorMessage: {
            dev: `can't find all user data`,
            user: "not found",
          },
        },
        HttpStatus.NOT_FOUND,
      );
    }
    let listUserAfter:userTypeNotPass[] = listUser.map(item => {
      let {Password, ...result} = item;
      return result
    })
    return listUserAfter
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    let user: userType = await this.userService.findOneById(id);
    if(user === null) {
      throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        errorMessage: {
          dev: `can't find user with id: ${id}`,
          user: "not found",
        },
      },
      HttpStatus.NOT_FOUND,
    );
    } 
    let {Password, ...result} = user;
    return result;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
