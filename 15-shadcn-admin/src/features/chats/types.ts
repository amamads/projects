export type Message = {
  sender: string;
  message: string;
  timestamp: string;
};

export type Chat = {
  id: string;
  profile: string;
  username: string;
  fullName: string;
  title: string;
  messages: Message[];
};
