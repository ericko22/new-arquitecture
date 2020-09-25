import {ITaskRepository} from "./ITaskRepository";
import {DataSource} from "../../DataSource/DataSource";
import {Task} from "../../../Domain/Entities/Task";
import {Mapper} from "../../../Mappers/Mapper";

export class TaskRepository implements ITaskRepository {

  private taskDataSource: DataSource<Task>
  private mapper: Mapper<Task>

  constructor(taskDataSource: DataSource<Task>, mapper: Mapper<Task>) {
    this.taskDataSource = taskDataSource
    this.mapper = mapper
  }

  async changeStatus(taskId: string, status: boolean): Promise<Task> {
    const updated = await this.taskDataSource.update(taskId, {status})
    return this.mapper.toDomain(updated)
  }

  async create(task: Task): Promise<Task> {
    const taskPersistence = this.mapper.toPersistence(task)
    const result = await this.taskDataSource.insert(taskPersistence)
    return this.mapper.toDomain(result)
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
    list = list.map((task: any) => this.mapper.toDomain(task))
    return list
  }

}
