import {ITaskRepository} from "./ITaskRepository";
import {DataSource} from "../../DataSource/DataSource";
import {Task} from "../../../Domain/Entities/Task";
import {TaskMapper} from "../../../Mappers/TaskMapper";

export class TaskRepository implements ITaskRepository {

  private taskDataSource: DataSource

  constructor(taskDataSource: DataSource) {
    this.taskDataSource = taskDataSource
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    const list = await this.get()
    let taskFound = list.find((task) => task.id === taskId)
    if (taskFound) taskFound = TaskMapper.toPersistence(taskFound)
    const updated = await this.taskDataSource.update(taskId, {...taskFound, status})
    return TaskMapper.toDomain(updated)
  }

  async create(data: any): Promise<Task> {
    let task = TaskMapper.toDomain({...data, user: data.user})
    task = TaskMapper.toPersistence(task)
    const result = await this.taskDataSource.insert(task)
    return TaskMapper.toDomain(result)
  }

  async delete(taskId: string): Promise<void> {
    await this.taskDataSource.delete(taskId)
  }

  async deleteComplete(): Promise<void> {
    let tasks = await this.get()
    for await (const task of tasks) {
      if (task.isComplete() && task.id) {
        await this.delete(task.id)
      }
    }
  }

  async get(): Promise<Task[]> {
    let list = await this.taskDataSource.get()
    list = list.map((task: any) => TaskMapper.toDomain(task))
    return list
  }

}
