import {UserEntityFactory} from "../../../Domain/Entities/User/UserEntityFactory";
import {UserRepository} from "./UserRepository";

export class MemoryUserRepositoryFactory {

  static execute() {
    const factory = new UserEntityFactory()
    return new UserRepository(factory)
  }

}
