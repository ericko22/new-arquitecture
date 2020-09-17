import {Task} from "./Entities/Task";

export interface Factory {
  execute(data: any): Task
}
