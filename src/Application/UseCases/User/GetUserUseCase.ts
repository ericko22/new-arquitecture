import {UseCase} from "../UseCase";
import {IUserRepository} from "../../../Infrastructure/Repositories/User/IUserRepository";
import {IUser} from "../../../DTO/IUser";
import {UserMapper} from "../../../Mappers/UserMapper";

export class GetUserUseCase implements UseCase {
  private repository: IUserRepository

  constructor(repository: IUserRepository) {
    this.repository = repository
  }

  execute(): IUser {
    const user = this.repository.get()
    return UserMapper.toDTO(user)
  }

}
