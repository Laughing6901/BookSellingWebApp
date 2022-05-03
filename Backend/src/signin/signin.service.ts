import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { SigninDto } from './dto/create-signin.dto';
import { UpdateSigninDto } from './dto/update-signin.dto';
import { signinUserReturnType, signinUserType } from './type/signin-user.type';

@Injectable()
export class SigninService {
  constructor(
      private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ){}
  async signin(signinData: SigninDto): Promise<any> 
  {
    try {
      let user = await this.authService.validate(signinData.username,signinData.password);
      console.log("user: ", user);
      let payload: signinUserReturnType = {
        username: user.username,
        sub: user.id
      }
      return {
        accessToken: this.jwtService.sign(payload),
      }
    } catch (error) {
        console.log(error);
    }
  }

  findAll() {
    return `This action returns all signin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signin`;
  }

  update(id: number, updateSigninDto: UpdateSigninDto) {
    return `This action updates a #${id} signin`;
  }

  remove(id: number) {
    return `This action removes a #${id} signin`;
  }
}
