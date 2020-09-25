import {DataSource} from "./DataSource";
import axios, {AxiosInstance} from "axios";

export class APIDataSource extends DataSource {

  private axios: AxiosInstance

  private constructor(uri: string) {
    super(uri);
    this.axios = axios.create({
      baseURL: 'http://localhost:5000/api'
    })
  }

  static getInstance(uri: string) {
    if (!APIDataSource.instance) APIDataSource.instance = new APIDataSource(uri)
    return APIDataSource.instance
  }

  async delete(entityId: string): Promise<void> {
    await this.axios.delete(`/${this.referenceName}/${entityId}`)
  }

  async get(): Promise<any[]> {
    const {data} = await this.axios.get<any[]>(`/${this.referenceName}`)
    return data
  }

  async insert(data: any): Promise<any> {
    const {data: response} = await this.axios.post(`/${this.referenceName}`, data)
    return response
  }

  async update(entity: string, data: any): Promise<any> {
    const {data: response} = await this.axios.put(`/${this.referenceName}/${entity}`, data)
    return response
  }

}
