import {UseCase} from "../UseCase";
import {IUserRepository} from "../../../Infrastructure/Repositories/User/IUserRepository";
import {IUser} from "../../../DTO/IUser";

export class GetUserUseCase implements UseCase {
  private repository: IUserRepository

  constructor(repository: IUserRepository) {
    this.repository = repository
  }

  execute(): IUser {
    const user = this.repository.get()
    return user.toJson()
  }

}
