import { useEffect, useState } from 'react';

export type MessageCardType = {
  name: string;
  message: string;
  color: string;
  keepTop: boolean;
}

const url = 'https://firstcommercialbank-9ac085739969.herokuapp.com/api/v1/messageBoard/messages';
const mock_url = 'http://localhost:3030/api/v1/messageBoard/messages';

const useMessageBoard = () => {
  const [messages, setMessages] = useState<MessageCardType[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchMessages = () => {
      fetch(mock_url)
        .then(res => res.json())
        .then(data => {
          const sortedMessages = data.sort((a: MessageCardType, b: MessageCardType) => {
            return a.keepTop === b.keepTop ? 0 : a.keepTop ? -1 : 1;
          });
          setLoaded(true);
          setMessages(sortedMessages);
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        });
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 10000);

    return () => clearInterval(intervalId);
  }, []);


  return {
    loaded,
    messages,
  };
}

export default useMessageBoard