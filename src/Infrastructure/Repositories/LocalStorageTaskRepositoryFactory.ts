import {TaskEntityFactory} from "../../Domain/Entities/TaskEntityFactory"
import {LocalStorageTaskDataSource} from "../DataSource/LocalStorageTaskDataSource"
import {TaskRepository} from "./TaskRepository"

export class LocalStorageTaskRepositoryFactory {

  static execute() {
    const factory = new TaskEntityFactory()
    const dataSource = LocalStorageTaskDataSource.getInstance(factory)
    return new TaskRepository(dataSource, factory)
  }

}
