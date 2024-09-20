import { BotUser as TBotUser } from "../api/botUser/BotUser";

export const BOTUSER_TITLE_FIELD = "username";

export const BotUserTitle = (record: TBotUser): string => {
  return record.username?.toString() || String(record.id);
};
