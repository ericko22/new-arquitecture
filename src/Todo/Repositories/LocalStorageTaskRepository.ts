import {TaskRepository} from "./TaskRepository";
import {TaskDataSource} from "../DataSource/TaskDataSource";
import {Task} from "../Domain/Entities/Task";
import {Factory} from "../Domain/Factory";

export class LocalStorageTaskRepository implements TaskRepository {

  private dataSource: TaskDataSource
  private factory: Factory

  constructor(dataSource: TaskDataSource, factory: Factory) {
    this.dataSource = dataSource
    this.factory = factory
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    const task = this.factory.execute({status})
    return await this.dataSource.update(taskId, task)
  }

  async create(data: any): Promise<Task> {
    const task = this.factory.execute(data)
    return await this.dataSource.insert(task)
  }

  async delete(taskId: string): Promise<void> {
    await this.dataSource.delete(taskId)
  }

  async deleteComplete(): Promise<void> {
    let tasks = await this.dataSource.get()
    for await (const {id, status} of tasks){
      if (status && id != null) {
        await this.delete(id)
      }
    }
  }

  async get(): Promise<Task[]> {
    return await this.dataSource.get()
  }

}
