import {ITaskRepository} from "../../Infrastructure/Repositories/ITaskRepository";
import {UseCase} from "../UseCase";

export class CleanCompleteUseCase implements UseCase {
  private repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this.repository = repository
  }

  async execute(): Promise<void> {
    await this.repository.deleteComplete()
  }

}
