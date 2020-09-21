import {TaskEntityFactory} from "../../Domain/Entities/TaskEntityFactory";
import {LocalStorageTaskDataSource} from "../DataSource/LocalStorageTaskDataSource";
import {LocalStorageTaskRepository} from "./LocalStorageTaskRepository";

export class LocalStorageTaskRepositoryFactory {

  static execute() {
    const factory = new TaskEntityFactory()
    const dataSource = LocalStorageTaskDataSource.getInstance()
    return new LocalStorageTaskRepository(dataSource, factory)
  }

}
