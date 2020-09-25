import {GetUserUseCase} from "./GetUserUseCase";
import {MemoryUserRepositoryFactory} from "../../../Infrastructure/Repositories/User/MemoryUserRepositoryFactory";

const repository = MemoryUserRepositoryFactory.execute()

const getUser = new GetUserUseCase(repository)

export default  {
  getUser: getUser.execute.bind(getUser)
}
