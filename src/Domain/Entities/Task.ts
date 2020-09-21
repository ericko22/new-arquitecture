import {Entity} from "../Entity"
import * as uuid from 'uuid'

export class Task extends Entity {
  private readonly id?: string
  private name: string
  private createdAt: Date
  private readonly status: boolean

  constructor(createdAt: Date, name: string, status: boolean, id?: string) {
    super()
    this.id = !!id ? id : uuid.v4()
    this.name = name
    this.status = status
    this.createdAt = createdAt
  }

  getId(): string {
    return this.id !== undefined ? this.id : ''
  }

  isComplete() {
    return this.id !== null && this.status
  }

}
