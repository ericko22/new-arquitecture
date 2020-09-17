import {TaskRepository} from "../Repositories/TaskRepository";
import {Task} from "../Domain/Entities/Task";

export class TaskUseCases {
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    return await this.repository.changeStatus(taskId, status)
  }

  async create(data: Task): Promise<Task> {
    return await this.repository.create(data)
  }

  async delete(taskId: string): Promise<void> {
    await this.repository.delete(taskId)
  }

  async deleteComplete(): Promise<void> {
    await this.repository.deleteComplete()
  }

  async get(): Promise<Task[]> {
    return await this.repository.get()
  }

}
