import {DTO} from "./DTO";

export interface IUser extends DTO{
  readonly id?: string
  readonly name: string
  readonly userName: string
}
