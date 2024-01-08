import { useEffect, useState } from 'react';

type MessageType = {
  name: string;
  message: string;
  color: string;
  keepTop: boolean;
}

const url = 'https://firstcommercialbank-9ac085739969.herokuapp.com/api/v1/messageBoard/messages';
const mock_url = 'http://localhost:3030/api/v1/messageBoard/messages';

const useMessageBoard = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(mock_url)
			.then(res => res.json())
			.then(messages => {
				const sortedMessages = messages.sort((a: MessageType, b: MessageType) => {
					return a.keepTop === b.keepTop ? 0 : a.keepTop ? -1 : 1;
				});
				setLoaded(true);
				setMessages(sortedMessages);
			});
  }, []);


  return {
    loaded,
		messages,
	};
}

export default useMessageBoard