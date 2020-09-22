import {TaskEntityFactory} from "../../Domain/Entities/TaskEntityFactory"
import {TaskRepository} from "./TaskRepository"
import {APITaskDataSource} from "../DataSource/APITaskDataSource";

export class APITaskRepositoryFactory {

  static execute() {
    const factory = new TaskEntityFactory()
    const dataSource = APITaskDataSource.getInstance(factory)
    return new TaskRepository(dataSource, factory)
  }

}
