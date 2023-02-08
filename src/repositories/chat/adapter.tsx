import { Message } from '@/entities/chat';
import { ResponseMessageData } from '@/generated/type';

export const adaptMessageFromData = (data: ResponseMessageData): Message => {
  return {
    text: data.text,
    createdAt: new Date(),
  };
};
