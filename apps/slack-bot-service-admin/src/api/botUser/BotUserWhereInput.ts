import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type BotUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  isBot?: BooleanNullableFilter;
  messages?: MessageListRelationFilter;
  slackId?: StringNullableFilter;
  username?: StringNullableFilter;
};
