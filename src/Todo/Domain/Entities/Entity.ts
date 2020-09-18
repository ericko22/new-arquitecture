export class Entity {

  constructor(properties = {}) {
    Object.keys(properties).forEach((key:string) => {
      // @ts-ignore
      return this[`_${key}`] = properties[key]
    })
    Object.defineProperty(this, '_properties', {
      value: properties,
      writable: false,
      enumerable: false,
      configurable: false
    })
  }

  private static anemicInstanceToObject (obj: any) {
    return Object.keys(obj)
      .map(key => key.replace('_', ''))
      .filter(key => obj._properties.hasOwnProperty(key))
      .reduce((result:any, key) => {
        result[key] = obj._properties[key]
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

  toJson() {
    return Entity.mapValuesToPlainObjects(
      Entity.anemicInstanceToObject(this)
    )
  }

}
