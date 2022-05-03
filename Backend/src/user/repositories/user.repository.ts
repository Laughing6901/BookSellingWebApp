import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";

//repository like entity manager 
//manage user entity
@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
}