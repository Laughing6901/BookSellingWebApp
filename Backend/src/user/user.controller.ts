import {
  Body, Controller, Delete, Get, HttpException,
  HttpStatus, Param, Patch, Post
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { emailType, userType, userTypeFind, userTypeUpdate } from "./type/user.type";
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
    let listUserAfter:userType[] = listUser.map(item => {
      let {Password, ...result} = item;
      return result
    })
    return listUserAfter
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    console.log(id);
    let user: userType = await this.userService.findOneById(id);
    console.log(user);
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

  @Get("email/:email")
  async findUserByEmail(@Param() email: string) {
    let Info: userTypeUpdate = {
      Email: email
    }
    let user: userType = await this.userService.findOneUser(Info);
    if(user === null) {
      throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        errorMessage: {
          dev: `can't find user with email: ${email}`,
          user: "not found",
        },
      },
      HttpStatus.NOT_FOUND,
    );
    } 
    let {Password, ...result} = user;
    return result;
  }

  @Get("phone/:phone")
  async findUserByPhone(@Param() phone: string) {
    let Info: userTypeUpdate = {
      PhoneNumber: phone
    }
    let user: userType = await this.userService.findOneUser(Info);
    if(user === null) {
      throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        errorMessage: {
          dev: `can't find user with phone number: ${phone}`,
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
