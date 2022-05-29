import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { userType, userTypeUpdate } from "../type/user.type";

//repository like entity manager
//manage user entity
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findOneByEmail(email: string): Promise<userType | null> {
    let result:userType = await this.findOne({
      where:{
        Email: email
      }
    })
    return result
  }
  
  async findOneById(id: string): Promise<userType | null> {
    let result:userType = await this.findOne({
      where:{
        UserId: parseInt(id)
      }
    })
    return result
  }

  async updateUser(id:number, newUser:userTypeUpdate): Promise<any> {
    let result = this.update({UserId: id}, newUser);
    console.log(result);
  }
}
