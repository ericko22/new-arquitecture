import {IUserRepository} from "./IUserRepository";
import {User} from "../../../Domain/Entities/User";
import {Factory} from "../../../Domain/Factory";

const user = {
  id: '1',
  name: 'Alfonso Francisco',
  userName: 'Alone'
}

export class UserRepository implements IUserRepository{

  private factory: Factory

  constructor(factory: Factory) {
    this.factory = factory
  }

  get(): User {
    return this.factory.execute(user)
  }

}
