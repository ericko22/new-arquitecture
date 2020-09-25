import {DataSource} from "./DataSource";
import axios, {AxiosInstance} from "axios";
import {Entity} from "../../Domain/Entity";
import {Mapper} from "../../Mappers/Mapper";

export class APIDataSource<T extends Entity> extends DataSource<T> {

  private axios: AxiosInstance

  private constructor(uri: string, mapper: Mapper<T>) {
    super(uri, mapper);
    this.axios = axios.create({
      baseURL: 'http://localhost:5000/api'
    })
  }

  static getInstance(uri: string, mapper: Mapper<any>) {
    if (!APIDataSource.instance) APIDataSource.instance = new APIDataSource(uri, mapper)
    return APIDataSource.instance
  }

  async delete(entityId: string): Promise<void> {
    await this.axios.delete(`/${this.referenceName}/${entityId}`)
  }

  async get(): Promise<T[]> {
    const {data} = await this.axios.get<any[]>(`/${this.referenceName}`)
    return data
  }

  async insert(data: T): Promise<T> {
    const {data: response} = await this.axios.post(`/${this.referenceName}`, data)
    return response
  }

  async update(entity: string, data: T): Promise<T> {
    const {data: response} = await this.axios.put(`/${this.referenceName}/${entity}`, data)
    return response
  }

}
