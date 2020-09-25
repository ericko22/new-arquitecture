import {IUserRepository} from "./IUserRepository";
import {User} from "../../../Domain/Entities/User";
import {Mapper} from "../../../Mappers/Mapper";

const user = {
  id: '1',
  name: 'Alfonso Francisco',
  userName: 'Alone'
}

export class UserRepository implements IUserRepository{

  mapper: Mapper<User>

  constructor(mapper: Mapper<User>) {
    this.mapper = mapper
  }

  get(): User {
    return this.mapper.toDomain(user)
  }

}
