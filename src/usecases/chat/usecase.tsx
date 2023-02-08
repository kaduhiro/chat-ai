import useSWR from 'swr';

import { useChatRepository } from '@/repositories/chat';

import { PostMessageQuery, PostMessageResponse } from './type';

export const usePostMessage = (query: PostMessageQuery) => {
  const repository = useChatRepository();

  return useSWR<PostMessageResponse>(query.prompt, () => repository.post(query), {
    revalidateOnFocus: false,
  });
};
