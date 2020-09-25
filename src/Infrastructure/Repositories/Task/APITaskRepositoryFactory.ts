import {TaskRepository} from "./TaskRepository"
import {APIDataSource} from "../../DataSource/APIDataSource";
import {TaskMapper} from "../../../Mappers/TaskMapper";

export class APITaskRepositoryFactory {

  static execute() {
    const mapper = new TaskMapper()
    const dataSource = APIDataSource.getInstance('tasks', mapper)
    return new TaskRepository(dataSource, mapper)
  }

}
