import {TaskRepository} from "../../Infrastructure/Repositories/TaskRepository";
import {ITask} from "../../DTO/Task";
import {UseCase} from "../UseCase";

export class CompleteTaskUseCase implements UseCase{
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async execute(taskId: string): Promise<ITask> {
    const task = await this.repository.changeStatus(taskId, true)
    return task.toJson()
  }

}
