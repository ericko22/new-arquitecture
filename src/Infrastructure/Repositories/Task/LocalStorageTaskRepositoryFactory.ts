import {TaskEntityFactory} from "../../../Domain/Entities/TaskEntityFactory"
import {LocalStorageDataSource} from "../../DataSource/LocalStorageDataSource"
import {TaskRepository} from "./TaskRepository"

export class LocalStorageTaskRepositoryFactory {

  static execute() {
    const factory = new TaskEntityFactory()
    const dataSource = LocalStorageDataSource.getInstance(factory, 'tasks')
    return new TaskRepository(dataSource, factory)
  }

}
