import {Task} from "./index"

export class TaskEntityFactory {
  execute = (data: any): Task  => {
    return new Task(data.createdAt, data.name, data.status, data.userId, data.id)
  }
}
