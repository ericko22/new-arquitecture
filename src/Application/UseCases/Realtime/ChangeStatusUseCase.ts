import {UseCase} from "../UseCase";
import {RealtimeEmmitEventRepository, RealtimeListenEventRepository} from "../../../Infrastructure/Repositories/RealtimeEvents/RealtimeListenAndEmmitEventsRepository";

interface Params {
  taskId: string,
  value: boolean
}

type Repository = RealtimeEmmitEventRepository & RealtimeListenEventRepository

export class ChangeStatusUseCase implements UseCase {
  private readonly repository: Repository

  constructor(repository: Repository) {
    this.repository = repository
  }

  async execute({taskId, value}: Params): Promise<void> {
    this.repository.emmit(value)
  }

}
