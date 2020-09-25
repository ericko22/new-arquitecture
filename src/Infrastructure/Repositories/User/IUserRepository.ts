import { User } from "../../../Domain/Entities/User";

export interface IUserRepository {
  get(): User
}
