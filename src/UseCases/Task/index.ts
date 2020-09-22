import {CreateTaskUseCase} from "./CreateTaskUseCase";
import { LocalStorageTaskRepositoryFactory } from "../../Infrastructure/Repositories/LocalStorageTaskRepositoryFactory";
import {GetTaskUseCase} from "./GetTaskUseCase";
import { ChangeStatusUseCase } from "./ChangeStatusUseCase";
import {CleanCompleteUseCase} from "./CleanCompleteUseCase";

const localStorageRepository = LocalStorageTaskRepositoryFactory.execute()

const create = new CreateTaskUseCase(localStorageRepository)
const get = new GetTaskUseCase(localStorageRepository)
const changeStatus = new ChangeStatusUseCase(localStorageRepository)
const cleanComplete = new CleanCompleteUseCase(localStorageRepository)

export default {
  create: create.execute.bind(create),
  get: get.execute.bind(get),
  changeStatus: changeStatus.execute.bind(changeStatus),
  cleanComplete: cleanComplete.execute.bind(cleanComplete)
}
