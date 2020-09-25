import {LocalStorageDataSource} from "../../DataSource/LocalStorageDataSource"
import {TaskRepository} from "./TaskRepository"
import {TaskMapper} from "../../../Mappers/TaskMapper";

export class LocalStorageTaskRepositoryFactory {

  static execute() {
    const mapper = new TaskMapper()
    const dataSource = LocalStorageDataSource.getInstance('tasks', mapper)
    return new TaskRepository(dataSource, mapper)
  }

}
