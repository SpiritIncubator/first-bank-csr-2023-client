import { useState, useEffect, useRef, useCallback } from 'react';
import io, {Socket} from 'socket.io-client';

const SOCKET_URL = 'http://localhost:4000';

type MessageEventType<T> = {
  channel: string;
  handler: (msg: T) => void;
}

type MessagePayload = {
  message: object;
}

export const useSubscribe = <T extends MessagePayload>() => {
  const [connection, setConnection] = useState(false);
  const socketHandler = useRef<Socket | null>(null);

  const registerSubscriptionEvent = useCallback(({channel, handler}: MessageEventType<T>) => {
    function sendMessage(message: T) {
      socketHandler.current?.emit(channel, message);
    }
    socketHandler.current?.on(channel, handler);

    return { sendMessage };
  }, []);

  function receivedConnection() {
    setConnection(true);
  }

  useEffect(() => {
    const socket = io(SOCKET_URL);
    socketHandler.current = socket;
    socketHandler.current.on('connect', receivedConnection);

    return () => {
      setConnection(false);
      socket.disconnect();
    }
  }, []);

  return {
    connection,
    registerSubscriptionEvent
  };
}