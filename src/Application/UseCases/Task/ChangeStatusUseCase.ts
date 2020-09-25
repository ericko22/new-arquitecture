import {ITaskRepository} from "../../../Infrastructure/Repositories/Task/ITaskRepository";
import {ITask} from "../../../DTO/Task";
import {UseCase} from "../UseCase";

interface Params {
  taskId: string,
  value: boolean
}

export class ChangeStatusUseCase implements UseCase {
  private repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this.repository = repository
  }

  async execute({taskId, value}: Params): Promise<ITask> {
    const task = await this.repository.changeStatus(taskId, value)
    return task.toJson()
  }

}
