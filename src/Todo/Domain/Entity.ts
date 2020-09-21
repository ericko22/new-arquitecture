import {ITask} from "../DTO/Task";

export class Entity {

  private static anemicInstanceToObject (obj: any) {
    return Object.keys(obj)
      .filter(key => obj.hasOwnProperty(key))
      .reduce((result:any, key) => {
        result[key] = obj[key]
        return result
      }, {})
  }

  private static mapValuesToPlainObjects (obj: any) {
    return Object.keys(obj).reduce(
      (o:any, key:string) => {
        o[key] = obj[key]
        if (o[key] instanceof Entity) o[key] = o[key].toJSON()
        if (o[key] instanceof Object) o[key] = Entity.mapValuesToPlainObjects(o[key])
        return o
      },
      obj instanceof Array ? [] : {}
    )
  }

  toJson(): ITask {
    return Entity.mapValuesToPlainObjects(
      Entity.anemicInstanceToObject(this)
    )
  }

}
