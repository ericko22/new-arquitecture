import {TaskRepository} from "../Infrastructure/Repositories/TaskRepository";
import {Task} from "../Domain/Entities/Task";
import {ITask} from "../Presentation/interfaces";

export class TaskUseCases {
  private repository: TaskRepository

  constructor(repository: TaskRepository) {
    this.repository = repository
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    return await this.repository.changeStatus(taskId, status)
  }

  async create(data: ITask): Promise<ITask> {
    const task = await this.repository.create(data)
    return task.toJson()
  }

  async delete(taskId: string): Promise<void> {
    await this.repository.delete(taskId)
  }

  async deleteComplete(): Promise<void> {
    await this.repository.deleteComplete()
  }

  async get(): Promise<ITask[]> {
    const list = await this.repository.get()
    return [...list].map((task) => task.toJson())
  }

}
