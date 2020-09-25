import {User} from "./index"

export class UserEntityFactory {
  execute = (data: any): User  => {
    return new User(data.id, data.name, data.userName)
  }
}
