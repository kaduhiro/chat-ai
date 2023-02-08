import { ResponseMessageData } from '@/generated/type';
import { PostMessageQuery } from '@/usecases/chat';

export const useApiClient = () => {
  const postMessage = async (query: PostMessageQuery): Promise<ResponseMessageData> => {
    const result = await fetch('/api/openai/message', {
      headers: {
        Accept: 'application/json, */*',
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(query),
    }).then((res) => res.json());

    return {
      text: result.text,
    };
  };

  return { postMessage };
};
