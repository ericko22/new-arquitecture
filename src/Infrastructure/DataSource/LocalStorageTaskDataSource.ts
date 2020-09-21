import {TaskDataSource} from "./TaskDataSource";
import {Task} from "../../Domain/Entities/Task";
import {Factory} from "../../Domain/Factory";

export class LocalStorageTaskDataSource extends TaskDataSource {

  taskFactory: Factory

  constructor(taskFactory: Factory) {
    super();
    this.taskFactory = taskFactory
  }

  private localStorageToTasks = (): Task[] => {
    const tasksStr = localStorage.getItem('tasks')
    if (tasksStr !== '') {
      const data = JSON.parse(tasksStr || '[]')
      return data.map((task: Task) => this.taskFactory.execute(task))
    }
    return []
  };

  delete(taskId: string): void {
    let tasks = this.localStorageToTasks()
    tasks = [...tasks].filter(task => task.getId() !== taskId)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  async get(): Promise<any[]> {
    return this.localStorageToTasks()
  }

  async insert(data: Task): Promise<Task> {
    let tasks = this.localStorageToTasks()
    tasks = [...tasks, data]
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return data
  }

  async update(taskId: string, data: Task): Promise<any> {
    let tasks: any[] = this.localStorageToTasks()
    tasks = [...tasks].map(task => task.id === taskId ? data : task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return data
  }

}
