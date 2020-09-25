import {Mapper} from "./Mapper";
import {User} from "../Domain/Entities/User";
import {IUser} from "../DTO/IUser";

export class UserMapper extends Mapper<User> {
  toDTO(user: User): IUser {
    return {
      id: user.id,
      userName: user.userName,
      name: user.name
    };
  }

  toDomain(raw: any): User {
    return User.create(raw)
  }

  toPersistence(user: User): any {
    return this.toDTO(user)
  }

}
