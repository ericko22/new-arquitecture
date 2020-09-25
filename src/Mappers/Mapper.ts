import {DTO} from "../DTO/DTO";

export abstract class Mapper<T> {
  // @ts-ignore
  static abstract toDomain(raw: any): T
  // @ts-ignore
  static abstract toDTO(t: T): DTO
  // @ts-ignore
  static abstract toPersistence(t: T): any
}
