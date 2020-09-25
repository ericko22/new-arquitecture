import {Entity} from "../../Entity"
import * as uuid from 'uuid'
import {User} from "../User"

export class Task extends Entity {
  private readonly id?: string
  private readonly name: string
  private readonly createdAt: Date
  private readonly status: boolean
  private readonly user: User

  constructor(createdAt: Date, name: string, status: boolean, user: User, id?: string) {
    super()
    this.id = !!id ? id : uuid.v4()
    this.name = name
    this.status = status
    this.createdAt = createdAt
    this.user = user
  }

  getId(): string {
    return this.id !== undefined ? this.id : ''
  }

  isComplete() {
    return this.id !== null && this.status
  }

}
