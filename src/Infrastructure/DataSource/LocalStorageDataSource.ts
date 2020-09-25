import {DataSource} from "./DataSource";
import {Entity} from "../../Domain/Entity";
import {Mapper} from "../../Mappers/Mapper";

export class LocalStorageDataSource<T extends Entity> extends DataSource<T> {

  static getInstance(key: string, mapper: Mapper<any>) {
    if (!LocalStorageDataSource.instance) {
      LocalStorageDataSource.instance = new LocalStorageDataSource(key, mapper)
    }
    return LocalStorageDataSource.instance
  }

  private localStorageToTasks = (): any[] => {
    const tasksStr = localStorage.getItem(this.referenceName)
    if (tasksStr !== '') {
      let result: any[] = JSON.parse(tasksStr || '[]')
      return [...result].map<T>(data => this.mapper.toDomain(data))
    }
    return []
  }

  delete(entityId: string): void {
    let list = this.localStorageToTasks()
    list = [...list].filter(entity => entity.id !== entityId)
    const newTasks = [...list].map(task => this.mapper.toPersistence(task))
    localStorage.setItem(this.referenceName, JSON.stringify(newTasks))
  }

  async get(): Promise<T[]> {
    return this.localStorageToTasks()
  }

  async insert(data: T): Promise<T> {
    let tasks = this.localStorageToTasks()
    let newTasks = [...tasks].map(task => this.mapper.toPersistence(task))
    const newTask = this.mapper.toPersistence(data)
    newTasks = [...newTasks, newTask]
    localStorage.setItem(this.referenceName, JSON.stringify(newTasks))
    return data
  }

  async update(taskId: string, data: any): Promise<T | null> {
    let tasks: T[] = this.localStorageToTasks()
    const taskFound = [...tasks].find(task => task.id === taskId)
    if (taskFound) {
      const taskDto = {...this.mapper.toDTO(taskFound), ...data}
      const newTask = this.mapper.toDomain(taskDto)
      tasks = [...tasks].map(task => task.id === taskId ? newTask : task)
      tasks = tasks.map((task: any) => this.mapper.toPersistence(task))
      localStorage.setItem(this.referenceName, JSON.stringify(tasks))
      return newTask
    }
    return null
  }

}
