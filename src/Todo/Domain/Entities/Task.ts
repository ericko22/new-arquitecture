import {Entity} from "./Entity";

export class Task extends Entity{
  private readonly id?: string = ''
  private name: string = ''
  private createdAt: Date = new Date()
  private status: boolean = false

  Id(): string {
    return this.id !== undefined ? this.id : ''
  }

  isComplete() {
    return this.id !== null && this.id
  }

}
