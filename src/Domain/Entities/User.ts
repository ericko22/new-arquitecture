import {Entity} from "../Entity";

interface UserProps {
  readonly id: string
  readonly name: string
  readonly userName: string
}

export class User extends Entity implements UserProps {
  private readonly _id: string
  private readonly _name: string
  private readonly _userName: string

  constructor({id, name, userName}: UserProps) {
    super();
    this._id = id
    this._name = name
    this._userName = userName
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get userName(): string {
    return this._userName;
  }

  static create(props: UserProps): User {
    return new User(props)
  }

}