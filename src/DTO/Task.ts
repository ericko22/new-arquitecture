import {IUser} from "./IUser";
import {DTO} from "./DTO";

export interface ITask extends DTO{
  readonly id?: string
  readonly user: IUser
  readonly name: string
  readonly createdAt: Date
  readonly status: boolean
}
