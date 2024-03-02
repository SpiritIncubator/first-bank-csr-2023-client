'use client'
import { useEffect, useState } from 'react';

export type MessageCardType = {
  name: string;
  message: string;
  color: string;
  keepTop: boolean;
}

const url = 'https://firstcommercialbank-9ac085739969.herokuapp.com/api/v1/messageBoard/messages';
// const mock_url = 'http://localhost:3030/api/v1/messageBoard/messages';

const useMessageBoard = () => {
  const [messages, setMessages] = useState<MessageCardType[]>([]);
  const [nonKeepMessages, setNonKeepMessages] = useState<MessageCardType[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchMessages = () => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const sortedKeepTopMessages = data
            .filter((message: MessageCardType) => !!message.keepTop)
            .sort((a: MessageCardType, b: MessageCardType) => {
              return a.keepTop === b.keepTop ? 0 : a.keepTop ? -1 : 1;
            });

          const nonKeepTopMessages = data.filter((message: MessageCardType) => !message.keepTop);
          const sortedNonKeepTopMessages = nonKeepTopMessages.reverse();
          setNonKeepMessages(sortedNonKeepTopMessages);
          setMessages([...sortedKeepTopMessages, ...sortedNonKeepTopMessages]);
          setLoaded(true);
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        });
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return { messages, loaded, nonKeepMessages };

}

export default useMessageBoard