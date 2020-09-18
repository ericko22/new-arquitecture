import {Factory} from "../Factory";
import {Task} from "./Task";

export class TaskFactory implements Factory {
  execute = (data: any): Task  => new Task(data)
}
