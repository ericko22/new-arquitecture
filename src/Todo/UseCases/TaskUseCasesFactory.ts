import {TaskUseCases} from "./TaskUseCases";
import {TaskFactory} from "../Domain/Entities/TaskFactory";
import {LocalStorageTaskDataSource} from "../Infrastructure/DataSource/LocalStorageTaskDataSource";
import {LocalStorageTaskRepository} from "../Infrastructure/Repositories/LocalStorageTaskRepository";

export class TaskUseCasesFactory {

  static execute(): TaskUseCases {
    const factory = new TaskFactory()
    const dataSource = LocalStorageTaskDataSource.getInstance()
    const repository = new LocalStorageTaskRepository(dataSource, factory)
    return new TaskUseCases(repository)
  }

}
