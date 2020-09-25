export interface RealtimeEmmitEventRepository {
  emmit(data: any): void
}

export interface RealtimeListenEventRepository {
  listen(): void
  stopEvent(): void
}
