export type Message = {
  text: string;
  createdAt: Date;
};

export type Thread = {
  title: string;
  messages: Message[];
};
