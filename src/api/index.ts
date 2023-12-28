import axios from 'axios';

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URL
interface CreateMessageParams {
  name: string;
  message: string;
  color: string;
}

export const createMessage = async (params: CreateMessageParams): Promise<void> => {
  try {
    const response = await axios.post(`${BACKEND_API}/api/v1/messageBoard/createMessage`, params);
    console.log(response.data);
  } catch (error) {
    console.error('Error creating message:', error);
  }
};

