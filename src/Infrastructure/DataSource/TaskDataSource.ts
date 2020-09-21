import {Task} from "../../Domain/Entities/Task";

export abstract class TaskDataSource {

  abstract instance: TaskDataSource

  // @ts-ignore
  static abstract getInstance(): Promise<TaskDataSource>

  abstract insert(data: Task): Promise<Task>

  abstract delete(taskId: string): void

  abstract update(taskId: string, data: any): Promise<Task>

  abstract get(): Promise<any[]>
}
