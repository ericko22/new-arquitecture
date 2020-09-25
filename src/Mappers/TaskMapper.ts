import {Mapper} from "./Mapper";
import {Task} from "../Domain/Entities/Task";
import {ITask} from "../DTO/Task";
import {UserMapper} from "./UserMapper";

export class TaskMapper extends Mapper<Task>{


  toDomain(raw: any): Task {
    return Task.create(raw)
  }

  toPersistence(task: Task): any {
    return this.toDTO(task)
  }

  toDTO(task: Task): ITask {
    return {
      status: task.status,
      name: task.name,
      createdAt: task.createdAt,
      id: task.id,
      user: new UserMapper().toDTO(task.user)
    }
  }

}
