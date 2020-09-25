import {ITaskRepository} from "../../../Infrastructure/Repositories/Task/ITaskRepository";
import {ITask} from "../../../DTO/Task";
import {UseCase} from "../UseCase";
import {Mapper} from "../../../Mappers/Mapper";
import {Task} from "../../../Domain/Entities/Task";

interface Params {
  taskId: string,
  value: boolean
}

export class ChangeStatusUseCase implements UseCase {
  private repository: ITaskRepository
  private mapper: Mapper<Task>

  constructor(repository: ITaskRepository, mapper: Mapper<Task>) {
    this.repository = repository
    this.mapper = mapper
  }

  async execute({taskId, value}: Params): Promise<ITask> {
    const task = await this.repository.changeStatus(taskId, value)
    return this.mapper.toDTO(task)
  }

}
