import io from 'socket.io-client'

export class SocketIO {
  
  private url = 'ws://localhost:3001'
  private socket: SocketIOClient.Socket
  private static instance: SocketIO

  private constructor() {
    const socket = io(this.url)
    this.logs(socket)
    this.socket = socket
  }

  private logs(socket: SocketIOClient.Socket) {
    socket.on('reconnecting', (attemptNumber: string) => console.log(`reconnecting [attempt #${attemptNumber}]`))
    socket.on('reconnect_failed', () => console.log('reconnect failed'))
  }

  static getInstance = () => {
    if(!SocketIO.instance) new SocketIO()
    return SocketIO.instance
  }

  disconnect = () => {
    if (this.socket) this.socket.disconnect()
  }

  emmit(eventName: string, callback: Function) {
    this.socket.emit(eventName, callback)
  }

  listen(eventName: string, callback: Function) {
    this.socket.on(eventName, callback)
  }

  stopEvent(eventName: string) {
    this.socket.removeEventListener(eventName)
  }

}
