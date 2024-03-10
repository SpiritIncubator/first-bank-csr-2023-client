import io, { Socket } from 'socket.io-client';
let instance: WebSocket;

// class WebSocket {
//   readonly SOCKET_URL = 'https://firstcommercialbank-9ac085739969.herokuapp.com/';
//   room: string = '';
//   socket: ReturnType<typeof io>;

//   constructor(props: { channel: string; room: string }) {
//     this.socket = io(this.SOCKET_URL);
//     this.socket.on('connect', () => {
//       console.log('Connected to server');
//     });
//     this.socket.emit(props.channel, {
//       room: props.room,
//     })
//     this.room = props.room;
//     instance = this;
//   }

//   sendEvent(message: any) {
//     this.socket.emit('sendRoomMsg', {
//       room: this.room,
//       message,
//     });
//   }

//   receivedEvent(callback: (msg: any) => void) {
//     this.socket.on(this.room, callback);
//   }

//   destroyConnection() {
//     this.socket.disconnect();
//   }
// }

// export default WebSocket;

class WebSocket {
  readonly SOCKET_URL: string = 'https://firstcommercialbank-9ac085739969.herokuapp.com/';
  socket: ReturnType<typeof io>;
  room: string;
  isConnect: boolean = false;

  constructor(props: { channel: string; room: string }) {
    this.socket = io(this.SOCKET_URL);
    this.socket.on('connect', () => {
      this.isConnect = true;
      console.log('Connected to server');
    });
    this.socket.emit(props.channel, {
      room: props.room,
    })
    this.room = props.room;

    setTimeout(() => {
      if (!this.isConnect) {
        console.log('retry connect')
        this.socket.connect()
      }
    }, 2000)

    if (instance) {
      throw new Error('There can only be only 1 instance!');
    }

    instance = this;
  }

  sendEvent(message: any) {
    this.socket.emit('sendRoomMsg', {
      room: this.room,
      message,
    });
  }

  receivedEvent(callback: (msg: any) => void) {
    this.socket.on(this.room, callback);
  }

  destroyConnection() {
    this.socket.disconnect();
  }

  leaveRoomEvent() {
    this.socket.emit('leaveRoom', { room: this.room });
  }
}

// const socketInstance = new WebSocket({ channel: 'subscribeChannel', room: 'stage3_controlBoard' });

export default WebSocket;