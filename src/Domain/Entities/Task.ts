import {Entity} from "../Entity"
import {User} from "./User"

interface TaskProps {
  readonly id?: string
  readonly name: string
  readonly createdAt: Date
  readonly status: boolean
  readonly user: User
}

export class Task extends Entity implements TaskProps {
  private readonly _name: string
  private readonly _createdAt: Date
  private readonly _status: boolean
  private readonly _user: User

  constructor({createdAt, id, name, status, user}: TaskProps) {
    super(id)
    this._name = name
    this._status = status
    this._createdAt = createdAt
    this._user = user
  }

  get name(): string {
    return this._name;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get status(): boolean {
    return this._status;
  }

  get user(): User {
    return this._user;
  }

  isComplete() {
    return this._id !== null && this._status
  }

  static create(props: TaskProps): Task {
    return new Task(props)
  }

}
