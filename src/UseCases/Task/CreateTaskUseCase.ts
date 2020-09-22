import {ITaskRepository} from "../../Infrastructure/Repositories/ITaskRepository";
import {ITask} from "../../DTO/Task";
import {UseCase} from "../UseCase";

export class CreateTaskUseCase implements UseCase {
  private repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this.repository = repository
  }

  async execute(data: ITask): Promise<ITask> {
    const task = await this.repository.create(data)
    return task.toJson()
  }

}
