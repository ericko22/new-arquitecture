import {TaskRepository} from "../../Infrastructure/Repositories/TaskRepository";
import {ITask} from "../../DTO/Task";
import {UseCase} from "../UseCase";

export class CreateTaskUseCase implements UseCase {
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async execute(data: ITask): Promise<ITask> {
    const task = await this.repository.create(data)
    return task.toJson()
  }

}
