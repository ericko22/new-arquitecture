import {ITaskRepository} from "../../../Infrastructure/Repositories/Task/ITaskRepository";
import {ITask} from "../../../DTO/Task";
import {UseCase} from "../UseCase";
import {Mapper} from "../../../Mappers/Mapper";
import {Task} from "../../../Domain/Entities/Task";

export class GetTaskUseCase implements UseCase {
  private repository: ITaskRepository
  private mapper: Mapper<Task>

  constructor(repository: ITaskRepository, mapper: Mapper<Task>) {
    this.repository = repository
    this.mapper = mapper
  }

  async execute(): Promise<ITask[]> {
    const list = await this.repository.get()
    return [...list].map<ITask>((task) => this.mapper.toDTO(task))
  }

}
