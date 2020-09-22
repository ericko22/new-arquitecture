import {CreateTaskUseCase} from "./CreateTaskUseCase";
import {GetTaskUseCase} from "./GetTaskUseCase";
import { ChangeStatusUseCase } from "./ChangeStatusUseCase";
import {CleanCompleteUseCase} from "./CleanCompleteUseCase";
import {APITaskRepositoryFactory} from "../../Infrastructure/Repositories/APITaskRepositoryFactory";

const repository = APITaskRepositoryFactory.execute()

const create = new CreateTaskUseCase(repository)
const get = new GetTaskUseCase(repository)
const changeStatus = new ChangeStatusUseCase(repository)
const cleanComplete = new CleanCompleteUseCase(repository)

export default {
  create: create.execute.bind(create),
  get: get.execute.bind(get),
  changeStatus: changeStatus.execute.bind(changeStatus),
  cleanComplete: cleanComplete.execute.bind(cleanComplete)
}
