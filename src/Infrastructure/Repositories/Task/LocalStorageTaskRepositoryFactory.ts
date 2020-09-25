import {LocalStorageDataSource} from "../../DataSource/LocalStorageDataSource"
import {TaskRepository} from "./TaskRepository"

export class LocalStorageTaskRepositoryFactory {

  static execute() {
    const dataSource = LocalStorageDataSource.getInstance('tasks')
    return new TaskRepository(dataSource)
  }

}
