import {ITaskRepository} from "../../../Infrastructure/Repositories/Task/ITaskRepository";
import {ITask} from "../../../DTO/Task";
import {UseCase} from "../UseCase";
import {TaskMapper} from "../../../Mappers/TaskMapper";

export class CreateTaskUseCase implements UseCase {
  private repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this.repository = repository
  }

  async execute(data: ITask): Promise<ITask> {
    console.log(data)
    const task = await this.repository.create(data)
    return TaskMapper.toDTO(task)
  }

}
