import {Mapper} from "./Mapper";
import {User} from "../Domain/Entities/User";
import {IUser} from "../DTO/IUser";

export class UserMapper extends Mapper<User> {
  static toDTO(user: User): IUser {
    return {
      id: user.id,
      userName: user.userName,
      name: user.name
    };
  }

  static toDomain(raw: any): User {
    return User.create(raw)
  }

  static toPersistence(user: User): any {
    return UserMapper.toDTO(user)
  }

}
