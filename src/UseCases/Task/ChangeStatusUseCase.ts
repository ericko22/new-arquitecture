import {TaskRepository} from "../../Infrastructure/Repositories/TaskRepository";
import {ITask} from "../../DTO/Task";
import {UseCase} from "../UseCase";

interface Params {
  taskId: string,
  value: boolean
}

export class ChangeStatusUseCase implements UseCase {
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async execute({taskId, value}: Params): Promise<ITask> {
    const task = await this.repository.changeStatus(taskId, value)
    return task.toJson()
  }

}
