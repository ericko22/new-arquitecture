import {ITaskRepository} from "../../../Infrastructure/Repositories/Task/ITaskRepository";
import {ITask} from "../../../DTO/Task";
import {UseCase} from "../UseCase";

export class GetTaskUseCase implements UseCase {
  private repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this.repository = repository
  }

  async execute(): Promise<ITask[]> {
    const list = await this.repository.get()
    return [...list].map<ITask>((task) => task.toJson())
  }

}
