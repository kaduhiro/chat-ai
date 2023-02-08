import { Thread } from '@/entities/chat';

export type PostMessageResponse = { thread: Thread };

export type PostMessageQuery = {
  prompt: string;
};
