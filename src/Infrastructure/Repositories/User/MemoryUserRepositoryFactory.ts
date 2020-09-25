import {UserRepository} from "./UserRepository";
import {UserMapper} from "../../../Mappers/UserMapper";

export class MemoryUserRepositoryFactory {

  static execute() {
    const mapper = new UserMapper()
    return new UserRepository(mapper)
  }

}
