import { BotUserWhereUniqueInput } from "../botUser/BotUserWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  botUser?: BotUserWhereUniqueInput;
  channel?: ChannelWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
