import {UseCase} from "../UseCase";
import {IUserRepository} from "../../../Infrastructure/Repositories/User/IUserRepository";
import {IUser} from "../../../DTO/IUser";
import {Mapper} from "../../../Mappers/Mapper";
import {User} from "../../../Domain/Entities/User";

export class GetUserUseCase implements UseCase {
  private repository: IUserRepository
  private mapper: Mapper<User>

  constructor(repository: IUserRepository, mapper: Mapper<User>) {
    this.repository = repository
    this.mapper = mapper
  }

  execute(): IUser {
    const user = this.repository.get()
    return this.mapper.toDTO(user)
  }

}
