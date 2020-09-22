import {Task} from "../../Domain/Entities/Task";

export interface ITaskRepository {
  get(): Promise<Task[]>
  create(data: any): Promise<Task>
  changeStatus(taskId: string, status: boolean): Promise<Task>
  delete(taskId: string): Promise<void>
  deleteComplete(): Promise<void>
}
