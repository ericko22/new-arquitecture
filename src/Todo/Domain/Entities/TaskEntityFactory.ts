import {Task} from "./Task";

export class TaskEntityFactory {
  execute = (data: any): Task  => {
    return new Task(data.createdAt, data.name, data.status)
  }
}
