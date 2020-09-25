import {IUserRepository} from "./IUserRepository";
import {User} from "../../../Domain/Entities/User";
import {UserMapper} from "../../../Mappers/UserMapper";

const user = {
  id: '1',
  name: 'Alfonso Francisco',
  userName: 'Alone'
}

export class UserRepository implements IUserRepository{

  get(): User {
    return UserMapper.toDomain(user)
  }

}
