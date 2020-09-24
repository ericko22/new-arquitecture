export interface RealtimeEventsRepository {
  emmit(data: any): void
  listen(): void
  stopEvent(): void
}