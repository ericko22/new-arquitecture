import {IUser} from "./IUser";

export interface ITask {
  readonly id?: string
  readonly user: IUser
  readonly name: string
  readonly createdAt: Date
  readonly status: boolean
}
