import {Entity} from "../../Domain/Entity";
import {Mapper} from "../../Mappers/Mapper";

export abstract class DataSource<T extends Entity> {

  protected referenceName: string
  protected mapper: Mapper<T>

  constructor(referenceName: string, mapper: Mapper<T>) {
    this.referenceName = referenceName
    this.mapper = mapper
  }

  protected static instance: DataSource<any>

  // @ts-ignore
  static abstract getInstance(referenceName: string, mapper: Mapper<T>): DataSource<T>

  abstract insert(data: T): Promise<any>

  abstract delete(taskId: string): void

  abstract update(taskId: string, data: any): Promise<T | null>

  abstract get(): Promise<T[]>
}
