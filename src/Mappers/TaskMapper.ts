import {Mapper} from "./Mapper";
import {Task} from "../Domain/Entities/Task";
import {ITask} from "../DTO/Task";
import {UserMapper} from "./UserMapper";

export class TaskMapper extends Mapper<Task>{
  static toDTO(task: Task): ITask {
    return {
      status: task.status,
      name: task.name,
      createdAt: task.createdAt,
      id: task.id,
      user: UserMapper.toDTO(task.user)
    };
  }

  static toDomain(raw: any): Task {
    return Task.create(raw)
  }

  static toPersistence(task: Task): any {
    return TaskMapper.toDTO(task)
  }

}
