import { Message } from "../message/Message";

export type Channel = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  slackId: string | null;
  updatedAt: Date;
};
