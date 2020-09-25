import {ITaskRepository} from "./ITaskRepository";
import {DataSource} from "../../DataSource/DataSource";
import {Task} from "../../../Domain/Entities/Task";
import {Factory} from "../../../Domain/Factory";

export class TaskRepository implements ITaskRepository {

  private taskDataSource: DataSource<Task>
  private factory: Factory

  constructor(taskDataSource: DataSource<Task>, factory: Factory) {
    this.taskDataSource = taskDataSource
    this.factory = factory
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    const list = await this.get()
    const taskFound = list.find((task) => task.getId() === taskId)
    const updated = await this.taskDataSource.update(taskId, {...taskFound, status})
    return this.factory.execute(updated)
  }

  async create(data: any): Promise<Task> {
    const task = this.factory.execute({...data, user: data.user})
    console.log(task)
    return await this.taskDataSource.insert(task)
  }

  async delete(taskId: string): Promise<void> {
    await this.taskDataSource.delete(taskId)
  }

  async deleteComplete(): Promise<void> {
    let tasks = await this.get()
    for await (const task of tasks){
      if (task.isComplete()) {
        await this.delete(task.getId())
      }
    }
  }

  async get(): Promise<Task[]> {
    let list = await this.taskDataSource.get()
    list = list.map(task => this.factory.execute(task))
    return list
  }

}
