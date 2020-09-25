import {UserRepository} from "./UserRepository";

export class MemoryUserRepositoryFactory {

  static execute() {
    return new UserRepository()
  }

}
