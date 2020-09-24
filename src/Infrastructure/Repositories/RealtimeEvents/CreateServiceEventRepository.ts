import { RealtimeEventsRepository } from './RealtimeEventsRepository'

export class CreateServiceEventRepository implements RealtimeEventsRepository {
  emmit(data: any): void {
    throw new Error('Method not implemented.');
  }
  listen(): void {
    throw new Error('Method not implemented.');
  }
  stopEvent(): void {
    throw new Error('Method not implemented.');
  }

}