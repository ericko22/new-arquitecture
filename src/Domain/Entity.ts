import * as uuid from "uuid";

export abstract class Entity {

  protected _id: string

  protected constructor(id?: string) {
    this._id = !!id ? id : uuid.v4()
  }

  get id(): string {
    return this._id;
  }

  // @ts-ignore
  static abstract create(props: any): Entity
}
