import {Factory} from "../Factory";
import {Task} from "./Task";

export class TaskFactory implements Factory {
  execute(data: any): Task {
    const task = new Task()
    task.id = data.id
    task.createdAt = data.createdAt
    task.name = data.name
    task.status = data.status
    return task
  }
}
