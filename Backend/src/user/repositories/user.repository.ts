import { EntityRepository, Repository, UpdateResult } from "typeorm";
import { User } from "../entities/user.entity";
import { userType, userTypeFind, userTypeUpdate } from "../type/user.type";

//repository like entity manager
//manage user entity
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
  async findOneUser(userInfo: userTypeFind): Promise<userType | null> {
    let result:userType = await this.findOne(userInfo);
    return result
  }

  async updateUser(id:number, newInfo:userTypeUpdate): Promise<UpdateResult> {
    let result:UpdateResult = await this.update({UserId: id}, newInfo);
    console.log(result);
    return result
  }

  async findOneByPhoneNumber(phone: string): Promise<userType | null> {
    let result:userType = await this.findOne({
      where:{
        PhoneNumber: phone
      }
    })
    return result
  }

  async createUser(newUser: userTypeUpdate): Promise<any> {
    let result = await this.save(newUser);
    return result;
  }
}
