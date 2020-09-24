import {ITaskRepository} from "../../Infrastructure/Repositories/Task/ITaskRepository";
import {ITask} from "../../DTO/Task";
import {UseCase} from "../UseCase";

export class CreateTaskUseCase implements UseCase {
  private repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this.repository = repository
  }

  async execute(data: ITask): Promise<ITask> {
    const task = await this.repository.create(data)
    console.log(task)
    return task.toJson()
  }

}
