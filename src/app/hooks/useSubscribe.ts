import { useState, useEffect } from 'react';
import io from 'socket.io-client';


export const useSubscribe = () => {
  const [connection, setConnection] = useState(false);

  useEffect(() => {
    const socket = io();
    setConnection(true);

    return () => {
      setConnection(false);
      socket.disconnect();
    }
  }, []);

  return [connection];
}