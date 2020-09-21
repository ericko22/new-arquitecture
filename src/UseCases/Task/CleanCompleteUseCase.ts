import {TaskRepository} from "../../Infrastructure/Repositories/TaskRepository";
import {UseCase} from "../UseCase";

export class CleanCompleteUseCase implements UseCase {
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async execute(): Promise<void> {
    await this.repository.deleteComplete()
  }

}
