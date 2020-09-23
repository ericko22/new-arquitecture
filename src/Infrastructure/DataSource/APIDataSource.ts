import {DataSource} from "./DataSource";
import {Factory} from "../../Domain/Factory";
import axios, {AxiosInstance} from "axios";

export class APIDataSource<T> extends DataSource<T> {

  private axios: AxiosInstance

  private constructor(factory: Factory, uri: string) {
    super(factory, uri);
    this.axios = axios.create({
      baseURL: 'http://localhost:5000/api'
    })
  }

  static getInstance(factory: Factory, uri: string) {
    if (!APIDataSource.instance) APIDataSource.instance = new APIDataSource(factory, uri)
    return APIDataSource.instance
  }

  async delete(taskId: string): Promise<void> {
    await this.axios.delete(`/${this.referenceName}/${taskId}`)
  }

  async get(): Promise<T[]> {
    const {data} = await this.axios.get<T[]>(`/${this.referenceName}`)
    return [...data].map((task) => this.factory.execute(task))
  }

  async insert(data: T): Promise<T> {
    const {data: response} = await this.axios.post(`/${this.referenceName}`, data)
    return this.factory.execute(response)
  }

  async update(taskId: string, data: T): Promise<T> {
    const {data: response} = await this.axios.put(`/${this.referenceName}/${taskId}`, data)
    return this.factory.execute([...response].find(task => task.id === taskId))
  }

}
