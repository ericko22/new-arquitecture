import {TaskRepository} from "./TaskRepository"
import {APIDataSource} from "../../DataSource/APIDataSource";

export class APITaskRepositoryFactory {

  static execute() {
    const dataSource = APIDataSource.getInstance('tasks')
    return new TaskRepository(dataSource)
  }

}
