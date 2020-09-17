import {TaskDataSource} from "./TaskDataSource";
import {Task} from "../Domain/Entities/Task";

// @ts-ignore
export class LocalStorageTaskDataSource extends TaskDataSource {

  private static instance: LocalStorageTaskDataSource

  static getInstance() {
    if (!LocalStorageTaskDataSource.instance) return new LocalStorageTaskDataSource()
    else return LocalStorageTaskDataSource.instance
  }

  private static localStorageToTasks(): Task[] {
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

  get(): Promise<Task[]> {
    return Promise.resolve(LocalStorageTaskDataSource.localStorageToTasks())
  }

  insert(data: Task): Promise<Task> {
    let tasks = LocalStorageTaskDataSource.localStorageToTasks()
    tasks = [...tasks, {...data, id: `${tasks.length + 1}`}]
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return Promise.resolve(data)
  }

  update(taskId: string, data: Task): Promise<Task> {
    let tasks = LocalStorageTaskDataSource.localStorageToTasks()
    let tasksFound = [...tasks].find(task => task.id === taskId)
    const newTask = {...tasksFound, ...data}
    tasks = [...tasks].map(task => task.id === taskId ? newTask : task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return Promise.resolve(newTask)
  }

}
