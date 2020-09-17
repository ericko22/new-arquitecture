import {TaskUseCases} from "./TaskUseCases";
import {TaskFactory} from "../Domain/Entities/TaskFactory";
import {LocalStorageTaskDataSource} from "../DataSource/LocalStorageTaskDataSource";
import {LocalStorageTaskRepository} from "../Repositories/LocalStorageTaskRepository";

export class TaskUseCasesFactory {

  static execute(): TaskUseCases {
    const factory = new TaskFactory()
    const dataSource = LocalStorageTaskDataSource.getInstance()
    const repository = new LocalStorageTaskRepository(dataSource, factory)
    return new TaskUseCases(repository)
  }

}
