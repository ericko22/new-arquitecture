import {DataSource} from "./DataSource";

export class LocalStorageDataSource extends DataSource {

  static getInstance(key: string) {
    if (!LocalStorageDataSource.instance) {
      LocalStorageDataSource.instance = new LocalStorageDataSource(key)
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
    let list = this.localStorageToTasks()
    list = [...list].filter(entity => entity.id !== entityId)
    localStorage.setItem(this.referenceName, JSON.stringify(list))
  }

  async get(): Promise<any[]> {
    return this.localStorageToTasks()
  }

  async insert(data: any): Promise<any> {
    let tasks = this.localStorageToTasks()
    tasks = [...tasks, data]
    localStorage.setItem(this.referenceName, JSON.stringify(tasks))
    return data
  }

  async update(taskId: string, data: any): Promise<any> {
    let tasks: any[] = this.localStorageToTasks()
    tasks = [...tasks].map(task => task.id === taskId ? data : task)
    localStorage.setItem(this.referenceName, JSON.stringify(tasks))
    return data
  }

}
