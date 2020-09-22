import {Task} from "../../Domain/Entities/Task";
import {Factory} from "../../Domain/Factory";

export abstract class TaskDataSource {

  protected taskFactory: Factory

  constructor(taskFactory: Factory) {
    this.taskFactory = taskFactory
  }

  protected static instance: TaskDataSource

  // @ts-ignore
  static abstract getInstance(taskFactory: Factory): TaskDataSource

  abstract insert(data: Task): Promise<Task>

  abstract delete(taskId: string): void

  abstract update(taskId: string, data: any): Promise<Task>

  abstract get(): Promise<Task[]>
}
