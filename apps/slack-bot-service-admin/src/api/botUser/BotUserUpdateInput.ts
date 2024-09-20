import { MessageUpdateManyWithoutBotUsersInput } from "./MessageUpdateManyWithoutBotUsersInput";

export type BotUserUpdateInput = {
  email?: string | null;
  isBot?: boolean | null;
  messages?: MessageUpdateManyWithoutBotUsersInput;
  slackId?: string | null;
  username?: string | null;
};
