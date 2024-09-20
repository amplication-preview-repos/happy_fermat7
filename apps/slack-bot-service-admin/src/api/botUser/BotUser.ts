import { Message } from "../message/Message";

export type BotUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  isBot: boolean | null;
  messages?: Array<Message>;
  slackId: string | null;
  updatedAt: Date;
  username: string | null;
};
