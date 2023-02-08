import { ResponseMessageData } from '@/generated/type';
import { PostMessageQuery } from '@/usecases/chat';

export type ApiClient = {
  postMessage: (query: PostMessageQuery) => Promise<ResponseMessageData>;
};
