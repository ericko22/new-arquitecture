import {TaskEntityFactory} from "../../Domain/Entities/TaskEntityFactory"
import {TaskRepository} from "./TaskRepository"
import {APIDataSource} from "../DataSource/APIDataSource";

export class APITaskRepositoryFactory {

  static execute() {
    const factory = new TaskEntityFactory()
    const dataSource = APIDataSource.getInstance(factory, 'tasks')
    return new TaskRepository(dataSource, factory)
  }

}
