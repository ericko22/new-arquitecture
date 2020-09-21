import {TaskRepository} from "../../Infrastructure/Repositories/TaskRepository";
import {ITask} from "../../DTO/Task";

export class GetTaskUseCases {
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async execute (): Promise<ITask[]> {
    const list = await this.repository.get()
    return [...list].map((task) => task.toJson())
  }

}
