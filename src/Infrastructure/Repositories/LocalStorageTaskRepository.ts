import {TaskRepository} from "./TaskRepository";
import {TaskDataSource} from "../DataSource/TaskDataSource";
import {Task} from "../../Domain/Entities/Task";
import {Factory} from "../../Domain/Factory";

export class LocalStorageTaskRepository implements TaskRepository {

  private dataSource: TaskDataSource
  private factory: Factory

  constructor(dataSource: TaskDataSource, factory: Factory) {
    this.dataSource = dataSource
    this.factory = factory
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    const list = await this.get()
    const taskFound = list.find((task) => task.getId() === taskId)
    const updated = await this.dataSource.update(taskId, {...taskFound, status})
    return this.factory.execute(updated)
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
    for await (const task of tasks){
      if (task.isComplete()) {
        await this.delete(task.Id())
      }
    }
  }

  async get(): Promise<Task[]> {
    const list = await this.dataSource.get()
    return [...list].map<Task>((task) => this.factory.execute(task))
  }

}
