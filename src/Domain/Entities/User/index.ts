import {Entity} from "../../Entity";

export class User extends Entity {
  id: string
  name: string
  userName: string

  constructor(id: string, name: string, userName: string) {
    super();
    this.id = id
    this.name = name
    this.userName = userName
  }

}
