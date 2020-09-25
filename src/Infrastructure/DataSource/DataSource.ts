import {Entity} from "../../Domain/Entity";

export abstract class DataSource {

  protected referenceName: string

  constructor(referenceName: string) {
    this.referenceName = referenceName
  }

  protected static instance: DataSource

  // @ts-ignore
  static abstract getInstance(referenceName: string): DataSource

  abstract insert(data: any): Promise<any>

  abstract delete(taskId: string): void

  abstract update(taskId: string, data: any): Promise<any>

  abstract get(): Promise<any[]>
}
