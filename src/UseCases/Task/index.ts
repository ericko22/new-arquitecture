import {CreateTaskUseCase} from "./CreateTaskUseCase";
import { LocalStorageTaskRepositoryFactory } from "../../Infrastructure/Repositories/LocalStorageTaskRepositoryFactory";
import {GetTaskUseCase} from "./GetTaskUseCase";
import { CompleteTaskUseCase } from "./CompleteTaskUseCase";

const localStorageRepository = LocalStorageTaskRepositoryFactory.execute()

const create = new CreateTaskUseCase(localStorageRepository)
const get = new GetTaskUseCase(localStorageRepository)
const completeTask = new CompleteTaskUseCase(localStorageRepository)

export default {
  create: create.execute.bind(create),
  get: get.execute.bind(get),
  completeTask: completeTask.execute.bind(completeTask)
}
