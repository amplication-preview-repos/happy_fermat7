import { MessageCreateNestedManyWithoutBotUsersInput } from "./MessageCreateNestedManyWithoutBotUsersInput";

export type BotUserCreateInput = {
  email?: string | null;
  isBot?: boolean | null;
  messages?: MessageCreateNestedManyWithoutBotUsersInput;
  slackId?: string | null;
  username?: string | null;
};
