import {ITaskRepository} from "../../../Infrastructure/Repositories/Task/ITaskRepository";
import {ITask} from "../../../DTO/Task";
import {UseCase} from "../UseCase";
import {Mapper} from "../../../Mappers/Mapper";
import {Task} from "../../../Domain/Entities/Task";

export class CreateTaskUseCase implements UseCase {
  private repository: ITaskRepository
  private mapper: Mapper<Task>

  constructor(repository: ITaskRepository, mapper: Mapper<Task>) {
    this.repository = repository
    this.mapper = mapper
  }

  async execute(data: ITask): Promise<ITask> {
    const task = this.mapper.toDomain(data)
    const taskCreated = await this.repository.create(task)
    return this.mapper.toDTO(taskCreated)
  }

}
