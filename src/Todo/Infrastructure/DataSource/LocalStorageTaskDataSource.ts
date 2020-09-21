import {TaskDataSource} from "./TaskDataSource";
import {Task} from "../../Domain/Entities/Task";

// @ts-ignore
export class LocalStorageTaskDataSource extends TaskDataSource {

  private static instance: LocalStorageTaskDataSource

  static getInstance() {
    if (!LocalStorageTaskDataSource.instance) return new LocalStorageTaskDataSource()
    else return LocalStorageTaskDataSource.instance
  }

  private static localStorageToTasks(): any[] {
    const tasksStr = localStorage.getItem('tasks')
    if (tasksStr !== '') {
      return JSON.parse(tasksStr || '[]')
    }
    return []
  }

  delete(taskId: string): void {
    let tasks = LocalStorageTaskDataSource.localStorageToTasks()
    tasks = [...tasks].filter(task => task.id !== taskId)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  get(): Promise<any[]> {
    return Promise.resolve(LocalStorageTaskDataSource.localStorageToTasks())
  }

  insert(data: Task): Promise<Task> {
    let tasks = LocalStorageTaskDataSource.localStorageToTasks()
    tasks = [...tasks, data]
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return Promise.resolve(data)
  }

  update(taskId: string, data: Task): Promise<Task> {
    let tasks: Task[] = LocalStorageTaskDataSource.localStorageToTasks()
    let tasksFound: Task | undefined = [...tasks].find(task => task.getId() === taskId )
    // @ts-ignore
    tasks = [...tasks].map(task => task.getId() === taskId ? {...tasksFound, ...data} : task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return Promise.resolve(data)
  }

}
