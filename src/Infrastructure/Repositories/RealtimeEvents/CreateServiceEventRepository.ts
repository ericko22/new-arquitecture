import {
  RealtimeEmmitEventRepository,
  RealtimeListenEventRepository
} from './RealtimeListenAndEmmitEventsRepository'

export class CreateServiceEventRepository implements RealtimeListenEventRepository, RealtimeEmmitEventRepository {

  listen(): void {
  }

  stopEvent(): void {
  }

  emmit(data: any): void {
  }

}
