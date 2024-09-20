import { BotUser } from "../botUser/BotUser";
import { Channel } from "../channel/Channel";

export type Message = {
  botUser?: BotUser | null;
  channel?: Channel | null;
  createdAt: Date;
  id: string;
  text: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
