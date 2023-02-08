import { useMemo } from 'react';

import { Thread } from '@/entities/chat';
import { ApiClient, useApiClient } from '@/hooks/api-client';
import { PostMessageQuery } from '@/usecases/chat';

import { adaptMessageFromData } from './adapter';

export const useChatRepository = () => {
  const apiClient = useApiClient();

  return useMemo(() => createChatRepository(apiClient), [apiClient]);
};

const createChatRepository = (apiClient: ApiClient) => ({
  async post(query: PostMessageQuery) {
    const thread: Thread = {
      title: query.prompt,
      messages: [
        {
          text: query.prompt,
          createdAt: new Date(),
        },
      ],
    };

    const data = await apiClient.postMessage(query);

    thread.messages.push(adaptMessageFromData(data));

    return { thread: thread };
  },
});
