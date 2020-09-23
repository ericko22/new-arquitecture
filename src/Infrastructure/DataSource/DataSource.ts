import {Factory} from "../../Domain/Factory";

export abstract class DataSource<T> {

  protected factory: Factory
  protected referenceName: string

  constructor(factory: Factory, referenceName: string) {
    this.factory = factory
    this.referenceName = referenceName
  }

  protected static instance: DataSource<any>

  // @ts-ignore
  static abstract getInstance(factory: Factory, referenceName: string): DataSource<T>

  abstract insert(data: T): Promise<T>

  abstract delete(taskId: string): void

  abstract update(taskId: string, data: any): Promise<T>

  abstract get(): Promise<T[]>
}
