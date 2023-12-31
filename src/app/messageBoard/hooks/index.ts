import { useEffect, useState } from 'react';

type MessageType = {
  name: string;
  message: string;
  color: string;
  keepTop: boolean;
}

const useMessageBoard = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/messageBoard/messages').then((res) => res.json()).then((messages) => {
      const sortedMessages = messages.sort((a: MessageType, b: MessageType) => {
        return a.keepTop === b.keepTop ? 0 : a.keepTop ? -1 : 1;
      });

      setMessages(sortedMessages);
    })
  }, []);


  return {
		messages,
	};
}

export default useMessageBoard