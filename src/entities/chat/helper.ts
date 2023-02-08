import { format } from 'date-fns';

import { Message } from './type';

export const selectId = (message: Message) => {
  return new Date(message.createdAt).getTime();
};

export const selectTime = (message: Message) => {
  return format(new Date(message.createdAt), 'HH:mm:ss');
};
