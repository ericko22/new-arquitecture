import { ChangeStatusUseCase } from "./ChangeStatusUseCase";
import {CreateServiceEventRepository} from "../../../Infrastructure/Repositories/RealtimeEvents/CreateServiceEventRepository";

const repository = new CreateServiceEventRepository()

const changeStatus = new ChangeStatusUseCase(repository)

export default {
  changeStatus: changeStatus.execute.bind(changeStatus)
}
