import {CreateTaskUseCases} from "./CreateTaskUseCases";
import { LocalStorageTaskRepositoryFactory } from "../../Infrastructure/Repositories/LocalStorageTaskRepositoryFactory";
import {GetTaskUseCases} from "./GetTaskUseCases";

const localStorageRepository = LocalStorageTaskRepositoryFactory.execute()

const create = new CreateTaskUseCases(localStorageRepository)
const get = new GetTaskUseCases(localStorageRepository)

export default {
  create: create.execute.bind(create),
  get: get.execute.bind(get)
}
