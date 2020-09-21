import {TaskRepository} from "../../Infrastructure/Repositories/TaskRepository";
import {ITask} from "../../DTO/Task";

export class CreateTaskUseCases {
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async execute(data: ITask): Promise<ITask> {
    const task = await this.repository.create(data)
    return task.toJson()
  }

}
