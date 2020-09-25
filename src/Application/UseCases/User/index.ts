import {GetUserUseCase} from "./GetUserUseCase";
import {MemoryUserRepositoryFactory} from "../../../Infrastructure/Repositories/User/MemoryUserRepositoryFactory";
import {UserMapper} from "../../../Mappers/UserMapper";

const repository = MemoryUserRepositoryFactory.execute()
const mapper = new UserMapper()

const getUser = new GetUserUseCase(repository, mapper)

export default  {
  getUser: getUser.execute.bind(getUser)
}
