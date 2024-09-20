import { BotUserWhereUniqueInput } from "../botUser/BotUserWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";

export type MessageCreateInput = {
  botUser?: BotUserWhereUniqueInput | null;
  channel?: ChannelWhereUniqueInput | null;
  text?: string | null;
  timestamp?: Date | null;
};
