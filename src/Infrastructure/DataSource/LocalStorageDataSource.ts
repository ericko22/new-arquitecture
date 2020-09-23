import {DataSource} from "./DataSource";
import {Factory} from "../../Domain/Factory";

export class LocalStorageDataSource<T> extends DataSource<T> {

  static getInstance(factory: Factory, key: string) {
    if (!LocalStorageDataSource.instance) {
      LocalStorageDataSource.instance = new LocalStorageDataSource(factory, key)
    }
    return LocalStorageDataSource.instance
  }

  private localStorageToTasks = (): any[] => {
    const tasksStr = localStorage.getItem(this.referenceName)
    if (tasksStr !== '') {
      return JSON.parse(tasksStr || '[]')
    }
    return []
  }

  delete(entityId: string): void {
    let tasks = this.localStorageToTasks()
    tasks = [...tasks].filter(entity => entity.id !== entityId)
    localStorage.setItem(this.referenceName, JSON.stringify(tasks))
  }

  async get(): Promise<T[]> {
    return this.localStorageToTasks()
  }

  async insert(data: T): Promise<T> {
    let tasks = this.localStorageToTasks()
    const task = this.factory.execute(data)
    tasks = [...tasks, task]
    localStorage.setItem(this.referenceName, JSON.stringify(tasks))
    return task
  }

  async update(taskId: string, data: T): Promise<any> {
    let tasks: any[] = this.localStorageToTasks()
    tasks = [...tasks].map(task => task.id === taskId ? data : task)
    localStorage.setItem(this.referenceName, JSON.stringify(tasks))
    return data
  }

}
